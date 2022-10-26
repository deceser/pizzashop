import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const CloseCart = ({ cartClose }) => {
  return (
    <Box>
      <IconButton color="error" onClick={cartClose}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};
export default CloseCart;
