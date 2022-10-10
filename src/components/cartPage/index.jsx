import React from "react";

import {
  Box__cartPage,
  Box__cartHeader,
  Box__Container,
} from "../../styles/cartPage";
import Logo from "./Logo";
import Title from "./Title";
import CartItem from "../cart/CartItem";
import Price from "../cart/Price";
import BuyNow from "../button/BuyNow";

const CartBlock = () => {
  return (
    <>
      <Box__Container>
        <Box__cartHeader>
          <Title />
          <Logo />
        </Box__cartHeader>
        <Box__cartPage>
          <CartItem />
        </Box__cartPage>
        <Price />
        <BuyNow></BuyNow>
      </Box__Container>
    </>
  );
};

export default CartBlock;
