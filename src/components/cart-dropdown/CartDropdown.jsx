import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.css";
import { CartItem } from "../cart-item/CartItem.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartHidden,
  selectCartItems,
} from "../../redux/cart/cartSelectors";
import toggleCartHidden from "../../redux/cart/cartActions";
import { Box, Modal, Stack } from "@mui/material";

const CartDropdown = ({ navigate }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const hidden = useSelector(selectCartHidden);
  return (
    <Modal
      open={!hidden}
      onClose={() => dispatch(toggleCartHidden())}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Stack
        maxWidth={"350px"}
        width={"90%"}
        maxHeight={"400px"}
        height={"70%"}
        sx={{ background: "white" }}
        pl={2}
      >
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message">Your Cart Is Empty</span>
          )}
        </div>
        <Box m={"auto"}>
          <CustomButton
            size="button-medium"
            type="button"
            onClick={() => {
              navigate("/checkout");
              dispatch(toggleCartHidden());
            }}
          >
            GO TO CHECKOUT
          </CustomButton>
        </Box>
      </Stack>
    </Modal>
  );
};

export default CartDropdown;
