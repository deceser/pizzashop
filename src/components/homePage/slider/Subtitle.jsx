import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Subtitle = ({ item }) => {
  return (
    <Box sx={{ maxWidth: "300px" }}>
      <Typography variant="subtitle1" sx={{ color: "white", mb: "20px" }}>
        {item.subtitle}
      </Typography>
    </Box>
  );
};
export default Subtitle;
