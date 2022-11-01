import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isAuthSelect, logout } from "../../redux/slices/authSlice";

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

import Logo from "./Logo";
import Title from "./Title";
import Menu from "../button/Menu";
import Reservation from "../button/SpecialOffers";
import LogIn from "../button/LogIn";
import LogOut from "../button/LogOut";
import OpenCart from ".././button/OpenCart";

export default function Header({ openClickCart }) {
  const isAuth = useSelector(isAuthSelect);
  const dispatch = useDispatch();
  const clickLogOut = () => {
    if (window.confirm("Are you sure?")) dispatch(logout());
  };
  const navigate = useNavigate();
  const clickAuth = () => {
    navigate("/authorization");
  };
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        padding: "10px",
        borderRadius: "10px 10px 0 0",
      }}
    >
      <Toolbar>
        <Logo />
        <Title />
        <Menu />
        <Reservation />
        {isAuth ? (
          <LogOut clickLogOut={clickLogOut} />
        ) : (
          <LogIn clickAuth={clickAuth} />
        )}

        <OpenCart openClickCart={openClickCart} />
      </Toolbar>
    </AppBar>
  );
}
