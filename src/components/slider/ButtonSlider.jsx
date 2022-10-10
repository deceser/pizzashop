import React from "react";
import Box from "@mui/material/Box";

import { Button__Slider } from "../../styles/button";

const ButtonSlider = ({ item }) => {
  return (
    <Box sx={{ mb: "50px" }}>
      <Button__Slider variant="container">{item.button}</Button__Slider>
    </Box>
  );
};
export default ButtonSlider;
