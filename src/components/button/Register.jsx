import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
const Register = ({ handleClickOpen }) => {
  return (
    <Box>
      <Typography
        sx={{ color: "#676767", backgroundColor: "white" }}
        variant="caption"
      >
        Don't have account?
      </Typography>
      <Button
        onClick={handleClickOpen}
        variant="text"
        sx={{
          color: "#676767",
          textTransform: "none",
          ":hover": {
            color: "black",
          },
        }}
      >
        Register
      </Button>
    </Box>
  );
};
export default Register;
