import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import { Button__Header } from "../../styles/button";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <Box>
      <Button__Header onClick={() => navigate("/menu")}>Menu</Button__Header>
    </Box>
  );
}
