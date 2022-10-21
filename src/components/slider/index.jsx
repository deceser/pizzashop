import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import background from "../../assets/image/background.png";
import { sliders } from "../../arr/sliders";
import { SampleNextArrow, SamplePrevArrow } from "./ArrowSlider";

import { Slider__Wraper, Box__Wraper } from "../../styles/slider";

import Customers from "./Customers";
import Delivery from "./Delivery";
import Image from "./Image";
import ButtonSlider from "./ButtonSlider";
import Title from "./Title";
import Subtitle from "./Subtitle";

const styles = {
  gridContainer: {
    backgroundImage: `url( ${background}`,
  },
};

const settings = {
  dots: true,
  arrows: false,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const SliderBlock = () => {
  return (
    <Slider {...settings}>
      {sliders.map((item, index) => (
        <Box key={index}>
          <Paper style={styles.gridContainer}>
            <Slider__Wraper>
              <Box__Wraper>
                <Title item={item} />
                <Subtitle item={item} />
                <ButtonSlider item={item} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "280px",
                  }}
                >
                  <Customers />
                  <Delivery />
                </Box>
              </Box__Wraper>
              <Image item={item} />
            </Slider__Wraper>
          </Paper>
        </Box>
      ))}
    </Slider>
  );
};

export default SliderBlock;
