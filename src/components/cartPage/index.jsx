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
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const CartBlock = () => {
  return (
    <>
      <Box__Container>
        <Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", p: "20px" }}>
              Payment and Delivery
            </Typography>
          </Box>
          <Box>
            <TextField
              sx={{
                ml: 2,
                width: "495px",
              }}
              id="outlined-textarea"
              label="Email"
              placeholder="Email"
              multiline
              color="info"
            />
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", p: "20px" }}>
              Shipping address
            </Typography>
            <Box>
              <TextField
                sx={{
                  ml: 2,
                  width: "240px",
                }}
                id="outlined-textarea"
                label="First Name"
                placeholder="First Name"
                multiline
                color="info"
              />
              <TextField
                sx={{
                  ml: 2,
                  width: "240px",
                }}
                id="outlined-textarea"
                label="Last Name"
                placeholder="Last Name"
                multiline
                color="info"
              />
            </Box>
          </Box>
        </Box>
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
