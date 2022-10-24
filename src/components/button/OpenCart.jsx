import React from "react";
import { useSelector } from "react-redux";

import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Typography from "@mui/material/Typography";

import { ButtonGroup__Header } from "../../styles/button";

export default function CartButton({ openClickCart }) {
  const { fullPrice, items } = useSelector((state) => state.cartSlice);
  const itemCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <ButtonGroup__Header disabled={itemCount === 0} onClick={openClickCart}>
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        {fullPrice}
      </Typography>
      <AttachMoneyOutlinedIcon />
      <Typography style={{ fontSize: "20px" }}>|</Typography>
      <ShoppingCartOutlinedIcon />
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        {itemCount}
      </Typography>
    </ButtonGroup__Header>
  );
}
