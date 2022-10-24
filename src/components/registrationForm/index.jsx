import React from "react";
import Dialog from "@mui/material/Dialog";

import TextField from "@mui/material/TextField";
import { Typography, Box, Paper } from "@mui/material";

import { Button__CallBack } from "../../styles/button";

const Registration = ({ registration, handleClose }) => {
  return (
    <div>
      <Dialog open={registration} onClose={handleClose}>
        <Box sx={{ height: "420px", width: "500px" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
              Create Account
            </Typography>
          </Box>
          <Box>
            <TextField
              sx={{ m: "10px 0 10px 10px", width: "480px" }}
              id="outlined-textarea"
              label="Email"
              placeholder="Email"
              multiline
              color="info"
            />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-around" }}
            noValidate
          >
            <TextField
              sx={{ mb: "10px", width: "230px" }}
              id="0"
              autoComplete="current-password"
              placeholder="Password"
              type="password"
              label="Password"
              color="info"
            />

            <TextField
              sx={{ mb: "10px", width: "230px" }}
              id="1"
              type="password"
              autoComplete="current-password"
              label="Repeat Password"
              placeholder="Repeat Password"
              color="info"
            />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-around" }}
            noValidate
          >
            <TextField
              sx={{ mb: "10px", width: "230px" }}
              id="outlined-textarea"
              label="First Name"
              placeholder="John"
              multiline
              color="info"
            />

            <TextField
              sx={{ mb: "10px", width: "230px" }}
              id="outlined-textarea"
              label="Last Name"
              placeholder="Smith"
              multiline
              color="info"
            />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-around" }}
            noValidate
          >
            <TextField
              sx={{ mb: "10px", width: "230px" }}
              id="outlined-textarea"
              label="City"
              placeholder="London"
              multiline
              color="info"
            />

            <TextField
              sx={{ mb: "10px", width: "230px" }}
              label="Home Address"
              placeholder="Baker Street 221b"
              multiline
              color="info"
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
            <Button__CallBack>Registration</Button__CallBack>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};
export default Registration;
