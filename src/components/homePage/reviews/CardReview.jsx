import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReview } from "../../../redux/slices/reviewSlice";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviews from "../../../arr/reviews";
import { Box__Card } from "../../../styles/reviews";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};

const CardReview = () => {
  const dispatch = useDispatch();
  const { review } = useSelector((state) => state.reviewReducer);

  React.useEffect(() => {
    dispatch(fetchReview());
  }, []);

  return (
    <Box
      sx={{
        width: "650px",
      }}
    >
      <Slider {...settings}>
        {review.items.map((item, id) => (
          <Box sx={{ display: "flex", paddingTop: "20px" }} key={id}>
            <Box__Card elevation={0}>
              <Box sx={{ mt: "-20px" }}>
                <Avatar
                  alt="Avatar"
                  src={item.avatar}
                  sx={{ width: 60, height: 60 }}
                />
              </Box>
              <Box
                sx={{
                  m: "10px 0 10px 0",
                }}
              >
                <Typography>{item.text}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  {item.user.fullName}
                </Typography>
              </Box>
              <Box>
                <Rating
                  name="half-rating-read"
                  defaultValue={item.rating}
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
