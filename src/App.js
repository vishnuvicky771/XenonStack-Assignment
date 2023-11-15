import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signin-signup/SignInSignUp";
import { selectCurrentUser } from "./redux/user/userSelectors";
import Checkout from "./pages/checkout/Checkout";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "./redux/user/userActions";
import { useMediaQuery } from "@mui/material";
import Payments from "./pages/Payments";

function App() {
  const CurrentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const isTablet = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <Header isSidebar={isTablet} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route
          path="/login"
          element={CurrentUser ? <Navigate to="/" /> : <SignInSignUp />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  );
}

export default App;
