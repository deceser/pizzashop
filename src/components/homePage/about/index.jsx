import React from "react";

import about from "../../../assets/image/about.png";
import { Box__Container } from "../../../styles/about";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Box__Container>
      <img src={about} alt="pic" width="500px" height="300px" />
      <Box sx={{ maxWidth: "500px" }}>
        <Typography
          variant="h5"
          sx={{ textTransform: "uppercase", color: "#FE5F1E" }}
        >
          About Us
        </Typography>
        <Typography sx={{ fontWeight: "bold", mt: "10px", fontSize: "20px" }}>
          This is Our Story
        </Typography>
        <Typography sx={{ mt: "50px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit
        </Typography>
      </Box>
    </Box__Container>
  );
};
export default About;
