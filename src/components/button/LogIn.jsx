import React from "react";
import Box from "@mui/material/Box";
import { Button__Header } from "../../styles/button";

export default function LogIn({ clickAuth }) {
  return (
    <Box sx={{ marginLeft: "auto" }}>
      <Button__Header onClick={clickAuth}>Log in</Button__Header>
    </Box>
  );
}
