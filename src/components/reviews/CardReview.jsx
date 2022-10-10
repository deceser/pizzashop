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
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};

const CardReview = () => {
  return (
    <Box
      className="1234"
      sx={{
        maxWidth: "700px",
        pr: "0px",
      }}
    >
      <Slider {...settings}>
        {reviews.map((item, id) => (
          <Box sx={{ display: "flex" }}>
            <Box__Card elevation={0} key={id}>
              <Box sx={{ top: "-25%" }}>
                <Avatar
                  alt="Avatar"
                  src={item.avatar}
                  sx={{ width: 60, height: 60 }}
                />
              </Box>
              <Box
                sx={{
                  mb: "10px",
                }}
              >
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
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default CardReview;
