import React from "react";
import Box from "@mui/material/Box";

import logo from "../../assets/image/logo.png";

export default function Logo() {
  return (
    <Box sx={{ margin: "10px" }}>
      <img src={logo} alt="logo" />
    </Box>
  );
}
