import React from "react";

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";

import Logo from "./Logo";
import Title from "./Title";
import Menu from "../button/Menu";
import SingIn from "../button/SingIn";
import OpenCart from ".././button/OpenCart";

export default function Header({ openClickCart }) {
  return (
    <Container sx={{ backgroundColor: "white", borderRadius: "20px 20px 0 0" }}>
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
          <Menu />
          <SingIn />
          <OpenCart openClickCart={openClickCart} />
        </Toolbar>
      </AppBar>
    </Container>
  );
}
