import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeCheckoutButton from "../../components/stripeCheckoutButton/StripeCheckout";
import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addItem,
  clearCart,
  clearItem,
  decrementItem,
} from "../../redux/cart/cartActions";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [open, setOpen] = useState(false);
  const onToken = async (token) => {
    try {
      const docRef = await addDoc(collection(db, "payments"), {
        email: currentUser?.email,
        price: total,
        date: new Date().toISOString(),
        itemsOrdered: {
          ...cartItems,
        },
      });
      setOpen(true);
      console.log("document stored with id", docRef?.id);
      dispatch(clearCart());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack gap={2} pb={2} alignItems={"center"} width={"100vw"}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          sx={{ top: "50px", right: "20px" }}
          onClose={() => setOpen(false)}
          severity="success"
        >
          Payment Successful
        </Alert>
      </Snackbar>

      <Typography
        fontSize={22}
        fontWeight={600}
        fontFamily={"Open Sans Condensed"}
      >
        Check out Page
      </Typography>
      <Stack width={"80%"} minWidth={"320px"} maxWidth={"600px"}>
        {cartItems?.length > 0 ? (
          <DataGrid
            columns={[
              {
                field: "imageUrl",
                headerName: "Product",
                maxWidth: 80,

                renderCell: (params) => {
                  return (
                    <Box
                      component="img"
                      src={params.row.imageUrl}
                      width={"100%"}
                    />
                  );
                },
              },

              {
                field: "name",
                headerName: "Description",
                flex: 1,
                renderCell: (params) => {
                  return (
                    <Typography fontSize={16}>{params.row.name}</Typography>
                  );
                },
              },
              {
                field: "quantity",
                headerName: "Quantity",
                flex: 1,
                renderCell: (params) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <KeyboardArrowLeftIcon
                        onClick={() =>
                          dispatch(decrementItem(params.row.cartItem))
                        }
                        sx={{ cursor: "pointer" }}
                      />
                      <Typography>{params.row.quantity}</Typography>
                      <KeyboardArrowRightIcon
                        onClick={() => dispatch(addItem(params.row.cartItem))}
                        sx={{ cursor: "pointer" }}
                      />
                    </Box>
                  );
                },
              },
              {
                field: "price",
                headerName: "Unit Price",
                flex: 1,
                renderCell: (params) => {
                  return (
                    <Typography fontSize={18}>
                      {"$ " + params.row.price}
                    </Typography>
                  );
                },
              },
              {
                field: "remove",
                headerName: "Remove",
                flex: 1,
                maxWidth: 80,
                renderCell: (params) => {
                  return (
                    <DeleteIcon
                      onClick={() => dispatch(clearItem(params.row.cartItem))}
                      sx={{ cursor: "pointer" }}
                    />
                  );
                },
              },
            ]}
            rows={cartItems?.map((cartItem, idx) => {
              return {
                ...cartItem,
                id: idx,
                cartItem: cartItem,
              };
            })}
            getRowHeight={() => "auto"}
            disableRowSelectionOnClick
            sx={{ width: "100%" }}
            autoHeight
          />
        ) : (
          <Typography
            fontSize={30}
            fontWeight={510}
            fontFamily={"Open Sans Condensed"}
            textAlign={"center"}
          >
            No items added to cart
          </Typography>
        )}
      </Stack>
      {cartItems?.length > 0 && (
        <>
          <Typography fontSize={18}>Total:{"$" + total}</Typography>
          <Stack alignItems={"center"} sx={{ textAlign: "center" }}>
            <Typography fontSize={14} sx={{ color: "red" }}>
              <Typography>Use the following details for payment</Typography>
              <Typography>
                card no:4242 4242 4242 4242 expiry:01/24 cvv:123
              </Typography>
            </Typography>
          </Stack>
          {currentUser === null ? (
            <Typography
              fontFamily={"Open Sans Condensed"}
              fontWeight={700}
              color={"red"}
              fontSize={18}
            >
              Log in to proceed for payment
            </Typography>
          ) : (
            <StripeCheckoutButton
              price={total}
              email={currentUser?.email}
              onToken={onToken}
            />
          )}
        </>
      )}
    </Stack>
  );
}

export default Checkout;
