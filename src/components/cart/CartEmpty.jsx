import { Box } from "@mui/material";
import React from "react";
import CartEmptyIcon from "../../assets/image/cart-empty.png";

const CartEmpty = () => {
  return (
    <Box sx={{ display: "flex", mb: "300px" }}>
      <img src={CartEmptyIcon} alt="empty" width="400px" />
    </Box>
  );
};
export default CartEmpty;
