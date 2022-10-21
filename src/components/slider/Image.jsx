import React from "react";
import Box from "@mui/material/Box";
const Image = ({ item }) => {
  return (
    <Box sx={{}}>
      <img src={item.image} alt="pizza" height={400} />
    </Box>
  );
};

export default Image;
