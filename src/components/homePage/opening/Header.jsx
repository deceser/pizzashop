import React from "react";

import Typography from "@mui/material/Typography";

import { Box__Header } from "../../../styles/opening";

const Header = () => {
  return (
    <Box__Header>
      <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
        Reservation
      </Typography>
    </Box__Header>
  );
};
export default Header;
