import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Box__Title } from "../../styles/header";
import pizzalogo from "../../assets/image/pizzalogo.png";
const Logo = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <img src={pizzalogo} alt="logo" width="150px" height="150px" />

      <Box__Title>
        <Typography
          sx={{
            color: "#333333",
            fontWeight: "bold",
            fontSize: "40px",
            backgroundColor: "white",
            fontFamily: "Roboto",
          }}
          variant="title"
        >
          PIZZA
        </Typography>
        <Typography
          sx={{ color: "#676767", backgroundColor: "white" }}
          variant="caption"
        >
          the most delicious pizza in the universe
        </Typography>
      </Box__Title>
    </Box>
  );
};

export default Logo;
