import React from "react";
import Box from "@mui/material/Box";
import { HashLink } from "react-router-hash-link";
import { Button__Header } from "../../styles/button";
export default function Reservation() {
  return (
    <Box
      sx={{
        ["@media screen and (min-width: 0px) and (max-width: 1115px)"]: {
          display: "none",
        },
      }}
    >
      <HashLink smooth to="/#reserv" style={{ textDecoration: "none" }}>
        <Button__Header>Reservation</Button__Header>
      </HashLink>
    </Box>
  );
}
