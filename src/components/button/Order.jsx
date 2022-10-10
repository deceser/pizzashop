import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import { Button__Order } from "../../styles/button";

const Order = ({}) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: "20px" }}>
      <Button__Order variant="contained" onClick={() => navigate("/cart")}>
        Order
      </Button__Order>
    </Box>
  );
};
export default Order;
