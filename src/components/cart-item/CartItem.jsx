import React from "react";
import "./CartItem.css";
import { Box, Stack } from "@mui/material";

export function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }} p={2} gap={2}>
      <img src={imageUrl} className="cart-image" alt={name + " image"} />
      <Stack>
        <span className="cart-item-name">{name} </span>
        <span className="cart-item-price">
          {quantity} x {"$" + price}
        </span>
      </Stack>
    </Box>
  );
}
