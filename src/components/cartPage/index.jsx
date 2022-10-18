import React from "react";

import {
  Box__cartPage,
  Box__cartHeader,
  Box__Container,
} from "../../styles/cartPage";
import Logo from "./Logo";
import Title from "./Title";
import Payment from "./Payment";
import CartItem from "../cart/CartItem";
import Price from "../cart/Price";
import BuyNow from "../button/BuyNow";
import { Box } from "@mui/system";

const CartBlock = () => {
  return (
    <>
      <Box__Container>
        <Payment />
        <Box>
          <Box__cartHeader>
            <Title />
            <Logo />
          </Box__cartHeader>
          <Box__cartPage>
            <CartItem />
          </Box__cartPage>
          <Price />
          <BuyNow />
        </Box>
      </Box__Container>
    </>
  );
};

export default CartBlock;
