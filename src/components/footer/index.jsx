import React from 'react'

import Logo from "./Logo";
import Title from "./Title";
import Menu from "../button/Menu";
import SpecialButton from "../button/SpecialOffers";
import CallBack from '../button/CallBack';

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Typography,Box } from '@mui/material';



 const Footer = () => {
  return (
    <Container sx={{ backgroundColor: "white", borderRadius: "0 0 20px 20px" }}>
        <AppBar elevation={0}
        position="static"
        sx={{
          padding: " 10px",
        }}>
            <Toolbar>
                <Logo/>
                <Title/>
                <Box sx={{display:"flex"}}>
                <Typography sx={{fontWeight:"bold"}}>
                +38 (099) 222 33 11
                </Typography>
                <CallBack/>
                </Box>
                <Menu/>
                <SpecialButton/>
                
            </Toolbar>
        </AppBar>
    </Container>
  )




}
export default Footer;