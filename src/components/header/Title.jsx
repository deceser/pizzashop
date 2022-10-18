import React from "react";
import Typography from "@mui/material/Typography";

import { Box__Title } from "../../styles/header";
const Title = () => {
  return (
    <Box__Title>
      <Typography
        sx={{
          color: "#333333",
          fontWeight: "bold",
          backgroundColor: "white",
          fontFamily: "Roboto",
        }}
        variant="title"
      >
        PIZZA
      </Typography>
      <Typography
        sx={{ color: "#676767", backgroundColor: "white" }}
        variant="caption"
      >
        the most delicious pizza in the universe
      </Typography>
    </Box__Title>
  );
};
export default Title;
