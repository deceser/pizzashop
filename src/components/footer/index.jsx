import React from "react";

import Logo from "./Logo";
import Title from "./Title";
import Menu from "../button/Menu";
import AboutUs from "../button/AboutUs";
import { Button__Icon } from "../../styles/button";

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Container sx={{ backgroundColor: "white", borderRadius: "0 0 20px 20px" }}>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          padding: " 10px",
        }}
      >
        <Toolbar>
          <Logo />
          <Title />
          <Box
            className="CallBack"
            sx={{ display: "flex", ml: "100px", flexGrow: "1" }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              +38 (099) 222 33 11
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexGrow: "1" }}>
            <Menu />
            <AboutUs />
          </Box>
          <Box>
            <a href="https://www.facebook.com/" target="blank">
              <Button__Icon>
                <FacebookIcon />
              </Button__Icon>
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <Button__Icon>
                <InstagramIcon />
              </Button__Icon>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Footer;
