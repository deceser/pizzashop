import React from "react";

import Typography from "@mui/material/Typography";

import { Box__Review, Box__Title } from "../../../styles/reviews";
import CardReview from "./CardReview";

const Reviews = () => {
  return (
    <Box__Review>
      <Box__Title sx={{ maxWidth: "390px" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: "30px" }}>
          What Our Customers Say
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Typography>
      </Box__Title>
      <CardReview />
    </Box__Review>
  );
};
export default Reviews;
