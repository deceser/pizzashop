import React from "react";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";

import Title from "./Title";
import CloseCart from "../button/CloseCart";
import CartItem from "./CartItem";
import Price from "./Price";
import Order from "../button/Order";
import { Cart__Header } from "../../styles/cart";

export default function Cart({ cartOpen, cartClose }) {
  const navigate = useNavigate();
  const clkickOrder = () => {
    navigate("/cart");
  };
  return (
    <Drawer
      variant="temporary"
      onClose={cartClose}
      open={cartOpen}
      anchor={"right"}
    >
      <Cart__Header>
        <Title />
        <CloseCart cartClose={cartClose} />
      </Cart__Header>
      <CartItem />
      <Price />
      <Order clickOrder={clkickOrder} />
    </Drawer>
  );
}
