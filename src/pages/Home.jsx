import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/categorySlice";

import products from "../arr/products";
import SliderBlock from "../components/slider";
import CardGreed from "../components/productCard";
import Categories from "../components/button/Categories";
import ViewAll from "../components/button/ViewAll";
import About from "../components/about";
import Icons from "../components/icons";
import Opening from "../components/opening";
import Reviews from "../components/reviews";
import LeaveReviews from "../components/leaveReviews";

import chees from "../assets/before/chees.png";
import berry from "../assets/before/berry.png";
import layer1 from "../assets/before/layer1.png";
import layer2 from "../assets/before/layer2.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  const [showItem, setShowItem] = React.useState(4);

  const clickShowItem = () => {
    setShowItem(showItem + 4);
  };

  const dispatch = useDispatch();
  const category = useSelector((state) => state.categorySlice.category);

  const clickCategory = (id) => {
    dispatch(setCategory(id));
  };

  return (
    <>
      <SliderBlock />
      <Box sx={{ display: "flex", justifyContent: "center", m: "30px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Bestseller
        </Typography>
      </Box>
      <CardGreed products={products.filter((item) => item.special === 1)} />
      <section id="menu">
        <Box
          sx={{ display: "flex", justifyContent: "center", m: "40px 0 40px 0" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Discover Our menu
          </Typography>
        </Box>
      </section>

      <Box
        sx={{
          m: "-20px 0 0 -20px ",
          height: 10,
        }}
      >
        <img src={layer1} alt="berry" width="80px" height="80px" />
      </Box>
      <Box
        sx={{
          m: "-20px -30px 0 0",
          height: 10,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img src={berry} alt="berry" width="100px" height="100px" />
      </Box>

      <Categories value={category} clickCategory={clickCategory} />
      <CardGreed
        products={products
          .filter((item) => item.category === category)
          .slice(0, showItem)}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "30px",
        }}
      >
        <ViewAll clickShowItem={clickShowItem} />
      </Box>
      <Box sx={{ m: "0 0 -50px 50px", width: 50 }}>
        <img src={chees} alt="chees" />
      </Box>
      <section id="about">
        <About />
      </section>
      <Icons />
      <Box
        sx={{
          m: "-60px 70px 60px 0",
          height: 10,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img src={layer2} alt="layer2" width="110px" height="110px" />
      </Box>
      <section id="reserv">
        <Opening />
      </section>
      <Reviews />
      <LeaveReviews />
    </>
  );
}
export default Home;
