import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import Registration from "../registrationForm";
import Logo from "./Logo";
import Register from "../button/Register";
import LogIn from "../button/LogIn";

const SingIn = () => {
  const [registration, setRegistration] = React.useState(false);

  const handleClickOpen = () => {
    setRegistration(true);
  };

  const handleClose = () => {
    setRegistration(false);
  };

  return (
    <>
      <Registration registration={registration} handleClose={handleClose} />
      <Container style={{ padding: "80px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo />
          <TextField
            sx={{ mb: "10px", width: "300px" }}
            id="outlined-textarea"
            label="Email"
            placeholder="Email"
            multiline
            color="info"
          />
          <TextField
            sx={{ mb: "10px", width: "300px" }}
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            label="Password"
            placeholder="Password"
            color="info"
          />

          <Box sx={{ display: "flex", mt: "10px" }}>
            <Register handleClickOpen={handleClickOpen} />
            <LogIn />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default SingIn;
