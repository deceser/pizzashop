import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Customers = () => {
  return (
    <Box style={{ display: "flex" }}>
      <PeopleAltIcon sx={{ color: "white", mr: "20px", fontSize: "40px" }} />
      <Box>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          2100 +
        </Typography>
        <Typography variant="caption" sx={{ color: "white" }}>
          Customers
        </Typography>
      </Box>
    </Box>
  );
};

export default Customers;
