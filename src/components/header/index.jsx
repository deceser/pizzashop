import React from "react";

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

import Logo from "./Logo";
import Title from "./Title";
import Menu from "../button/Menu";
import Reservation from "../button/SpecialOffers";
import SingIn from "../button/SingIn";
import OpenCart from ".././button/OpenCart";

export default function Header({ openClickCart }) {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        padding: " 10px",
        borderRadius: "10px 10px 0 0",
      }}
    >
      <Toolbar>
        <Logo />
        <Title />
        <Menu />
        <Reservation />
        <SingIn />
        <OpenCart openClickCart={openClickCart} />
      </Toolbar>
    </AppBar>
  );
}
