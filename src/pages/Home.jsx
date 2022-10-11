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
          Delicious Pizza
        </Typography>
      </Box>
      <CardGreed products={products.filter((item) => item.special === 1)} />
      <Box sx={{ display: "flex", justifyContent: "center", mb: "30px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Discover Our menu
        </Typography>
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
          mb: "100px",
          mt: "30px",
        }}
      >
        <ViewAll clickShowItem={clickShowItem} />
      </Box>
      <section id="about">
        <About />
      </section>

      <Icons />
      <Opening />
      <Reviews />
      <LeaveReviews />
    </>
  );
}
export default Home;
