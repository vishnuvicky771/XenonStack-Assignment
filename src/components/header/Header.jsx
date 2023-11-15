import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import {
  HeaderContainer,
  HeaderItems,
  HeaderList,
  HeaderListItem,
} from "./HeaderStyles";
import { signOutStart } from "../../redux/user/userActions";
import { Box, Drawer, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import toggleCartHidden from "../../redux/cart/cartActions";

function NavBar({ direction }) {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const styles = {
    textDecoration: "none",
    color: "black",
    fontSize: 24,
    padding: "0px 20px 0px",
  };
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: `${direction}`,
        alignItems: `${direction === "row" ? "center" : "flex-start"}`,
        justifyContent: `${direction === "row" ? "flex-end" : "flex-start"}`,
        width: `${direction === "column" ? "200px" : "100%"}`,
      }}
      p={3}
      //  spacing={direction === "column" ? 3 : 0}
      gap={3}
    >
      <Link component={RouterLink} to={"/"} sx={styles}>
        Home
      </Link>
      <Link component={RouterLink} to={"/shop"} sx={styles}>
        Shop
      </Link>
      {currentUser !== null && (
        <Link component={RouterLink} to={"/payments"} sx={styles}>
          Payment History
        </Link>
      )}
      <Box
        onClick={() => {
          if (currentUser) dispatch(signOutStart());
          else navigate("/login");
        }}
        sx={{ ...styles, cursor: "pointer" }}
      >
        {currentUser ? "SIGN OUT" : "SIGN IN"}
      </Box>
      <CartIcon />
      <CartDropdown navigate={navigate} />
    </Stack>
  );
}

function Header({ isSidebar }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box
      width={"100vw"}
      sx={{ overflowX: "hidden", display: "flex", justifyContent: "flex-end" }}
    >
      <MenuIcon
        sx={{
          display: `${isSidebar ? "block" : "none"}`,
          width: "40px",
          height: "40px",
          padding: "20px",
        }}
        onClick={() => setDrawerOpen(true)}
      />
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <NavBar direction={"column"} />
      </Drawer>
      {!isSidebar && <NavBar direction={"row"} />}
    </Box>
  );
}

export default Header;
