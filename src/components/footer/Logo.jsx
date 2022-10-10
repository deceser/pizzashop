import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/image/logo.png";

export default function Logo() {
  const navigate = useNavigate();
  return (
      <Box sx={{ margin: "10px", cursor: "pointer" }}>
        <img src={logo} alt="logo" />
      </Box>
  );
}
