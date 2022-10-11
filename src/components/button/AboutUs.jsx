import React from "react";
import Box from "@mui/material/Box";
import { HashLink } from "react-router-hash-link";
import { Button__AboutUs } from "../../styles/button";
const AboutUs = () => {
  return (
    <Box>
      <HashLink smooth to="/#about" style={{ textDecoration: "none" }}>
        <Button__AboutUs variant="text"> About Us</Button__AboutUs>
      </HashLink>
    </Box>
  );
};
export default AboutUs;
