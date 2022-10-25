import React from "react";

import products from "../arr/products";
import SliderBlock from "../components/slider";
import ProductCard from "../components/productCard";
import OurMenu from "../components/ourMenu";
import About from "../components/about";
import Icons from "../components/icons";
import Opening from "../components/opening";
import Reviews from "../components/reviews";
import LeaveReviews from "../components/leaveReviews";

import { Box__SmartObject, Box__Layer, Box__Layer2 } from "../styles/layer";

import chees from "../assets/before/chees.png";
import berry from "../assets/before/berry.png";
import layer1 from "../assets/before/layer1.png";
import layer2 from "../assets/before/layer2.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <>
      <SliderBlock />
      <Box sx={{ display: "flex", justifyContent: "center", m: "30px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Bestseller
        </Typography>
      </Box>
      <ProductCard products={products.filter((item) => item.special === 1)} />
      <section id="menu">
        <Box
          sx={{ display: "flex", justifyContent: "center", m: "40px 0 40px 0" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Discover Our menu
          </Typography>
        </Box>
      </section>
      <Box__Layer>
        <img src={layer1} alt="berry" width="80px" height="80px" />
      </Box__Layer>
      <Box__SmartObject>
        <img src={berry} alt="berry" width="100px" height="100px" />
      </Box__SmartObject>
      <OurMenu />
      <Box sx={{ m: "0 0 -50px 50px", width: 50 }}>
        <img src={chees} alt="chees" />
      </Box>
      <section id="about">
        <About />
      </section>
      <Icons />
      <Box__Layer2>
        <img src={layer2} alt="layer2" width="110px" height="110px" />
      </Box__Layer2>
      <section id="reserv">
        <Opening />
      </section>
      <Reviews />
      <LeaveReviews />
    </>
  );
}
export default Home;