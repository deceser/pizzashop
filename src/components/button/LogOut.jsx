import React from "react";
import Box from "@mui/material/Box";
import { Button__Header } from "../../styles/button";

export default function LogIn({ clickLogOut }) {
  return (
    <Box sx={{ marginLeft: "auto" }}>
      <Button__Header onClick={clickLogOut}>Log Out</Button__Header>
    </Box>
  );
}
