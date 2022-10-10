import React from "react";
import Box from "@mui/material/Box";

import cartlogo from "../../assets/image/cartlogo.png";

const Logo = () => {
  return (
    <Box>
      <img src={cartlogo} alt="logo" width="25px" height="25px" />
    </Box>
  );
};
export default Logo;
