import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviews from "../../arr/reviews";
import { Box__Card } from "../../styles/reviews";

const settings = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 3,
};

const CardReview = () => {
  return (
        <Slider {...settings}>
        <Box sx={{ display: "flex" }}>
      {reviews.map((item, id) => (
            <Box__Card elevation={0} key={id}>
              <Box sx={{ mt: "-30px", mb: "10px" }}>
                <Avatar
                  alt="Avatar"
                  src={item.avatar}
                  sx={{ width: 60, height: 60 }}
                />
              </Box>
              <Box sx={{ mb: "10px" }}>
                <Typography>{item.comment}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
              </Box>

              <Box>
                <Rating
                  name="half-rating-read"
                  defaultValue={item.raiting}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </Box__Card>
      ))}
    </Box>
        </Slider>


   
  );
};
export default CardReview;
