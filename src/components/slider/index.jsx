import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import background from "../../assets/image/background.png";
import { sliders } from "../../arr/sliders";
import { SampleNextArrow, SamplePrevArrow } from "./ArrowSlider";

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
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const SliderBlock = () => {
  return (
    <Slider {...settings}>
      {sliders.map((item, index) => (
        <Box key={index}>
          <Paper style={styles.gridContainer}>
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: "30px",
                  ml: "30px",
                }}
              >
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
              </Grid>
              <Grid item xs={5}>
                <Image item={item} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
    </Slider>
  );
};

export default SliderBlock;
