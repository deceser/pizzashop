import React from "react";
import Box from "@mui/material/Box";

import { Button__BuyNow } from "../../styles/button";

const BuyNow = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: "20px" }}>
      <Button__BuyNow variant="contained">Buy Now</Button__BuyNow>
    </Box>
  );
};
export default BuyNow;
