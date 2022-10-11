import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Box__Review } from "../../styles/reviews";
import CardReview from "./CardReview";

const Reviews = () => {
  return (
    <Box__Review className="">
      <Box sx={{ maxWidth: "390px" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: "30px" }}>
          What Our Customers Say
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Typography>
      </Box>
      <CardReview />
    </Box__Review>
  );
};
export default Reviews;
