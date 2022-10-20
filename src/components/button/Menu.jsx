import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Button__Header } from "../../styles/button";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <Box sx={{ mr: "10px" }}>
      <HashLink smooth to="/#menu" style={{ textDecoration: "none" }}>
        <Button__Header onClick={() => navigate("/menu")}>Menu</Button__Header>
      </HashLink>
    </Box>
  );
}
