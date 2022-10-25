import React from "react";
import Box from "@mui/material/Box";

import { Button__Order } from "../../styles/button";

const Order = ({ clickOrder }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: "20px" }}>
      <Button__Order variant="contained" onClick={clickOrder}>
        Order
      </Button__Order>
    </Box>
  );
};
export default Order;
