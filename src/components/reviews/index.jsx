import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box__Review } from "../../styles/reviews";
import CardReview from "./CardReview";

const settings = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};


const Reviews = () => {
  return (
    <Box sx={{display:"flex"}}>
    
    <Box__Review>
      <Box sx={{ maxWidth: "390px" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: "30px" }}>
          What Our Customers Say
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Typography>
      </Box>

     
    </Box__Review>
    <CardReview />
    </Box>
    
    
  );
};
export default Reviews;
