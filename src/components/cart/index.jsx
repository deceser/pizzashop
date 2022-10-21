import React from "react";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";

import Title from "./Title";
import CloseCart from "../button/CloseCart";
import CartItem from "./CartItem";
import Price from "./Price";
import Order from "../button/Order";
import { Cart__Header } from "../../styles/cart";

export default function Cart({ cartOpen, cartClose }) {
  return (
    <Drawer onClose={cartClose} open={cartOpen} anchor="right">
      <Cart__Header>
        <Title />
        <CloseCart cartClose={cartClose} />
      </Cart__Header>
      <CartItem />
      <Price />
      <Order cartClose={cartClose} />
    </Drawer>
  );
}
