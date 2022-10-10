import React from "react";

import AboutUS from "../button/AboutUS.jsx";
import about from "../../assets/image/about.png";
import { Box__Container } from "../../styles/about";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Paper sx={{ height: "500px", backgroundColor: "#F3F3F3" }} elevation={0}>
      <Box__Container>
        <Box sx={{ mt: "120px" }}>
          <img src={about} alt="pic" width="450" />
        </Box>
        <Box sx={{ mt: "120px", maxWidth: "450px" }}>
          <AboutUS />
          <Box>
            <Typography
              sx={{ fontWeight: "bold", mt: "10px", fontSize: "20px" }}
            >
              This is Our Story
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ mt: "50px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit
            </Typography>
          </Box>
        </Box>
      </Box__Container>
    </Paper>
  );
};
export default About;
