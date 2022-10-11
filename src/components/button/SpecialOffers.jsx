import React from "react";
import Box from "@mui/material/Box";
import { HashLink } from "react-router-hash-link";
import { Button__Header } from "../../styles/button";
export default function Reservation() {
  return (
    <Box>
      <HashLink smooth to="/#reserv" style={{ textDecoration: "none" }}>
        <Button__Header>Reservation</Button__Header>
      </HashLink>
    </Box>
  );
}
