import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Title = ({ item }) => {
  return (
    <Box sx={{ mb: "20px" }}>
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {item.title1}
      </Typography>
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {item.title2}
      </Typography>
    </Box>
  );
};
export default Title;
