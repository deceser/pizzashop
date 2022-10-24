import React from "react";

import Logo from "./Logo";
import Title from "./Title";
import Menu from "../button/Menu";
import AboutUs from "../button/AboutUs";
import CallBack from "../button/CallBack";
import { Button__Icon } from "../../styles/button";

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        borderRadius: "0 0 10px 10px",
        padding: " 10px",
      }}
    >
      <Toolbar>
        <Logo />
        <Title />
        <Box
          sx={{
            display: "flex",
            ml: "100px",
            flexGrow: "1",
            ["@media screen and (min-width: 0px) and (max-width: 1115px)"]: {
              display: "none",
            },
          }}
        >
          <a href="tel:+38 (099) 222 33 11" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "black",
              }}
            >
              +38 (099) 222 33 11
            </Typography>
          </a>
        </Box>
        <Box sx={{ display: "flex", flexGrow: "1" }}>
          <a href="tel:+38 (099) 222 33 11" style={{ textDecoration: "none" }}>
            <CallBack />
          </a>
          <Menu />
          <AboutUs />
        </Box>
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
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
