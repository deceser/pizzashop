import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Button__Header } from "../../styles/button";

export default function SpecialButton() {
  const navigate = useNavigate();
  return (
    <Box sx={{ marginLeft: "auto" }}>
      <Button__Header onClick={() => navigate("/SingIn")}>
        Log in
      </Button__Header>
    </Box>
  );
}
