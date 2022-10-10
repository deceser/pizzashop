import React from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";

import { Box__Price } from "../../styles/cart";

const Price = () => {
  const { fullPrice } = useSelector((state) => state.cartSlice);
  return (
    <Box__Price>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Price:
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {fullPrice} $
      </Typography>
    </Box__Price>
  );
};
export default Price;
