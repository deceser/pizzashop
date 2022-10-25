import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/categorySlice";

import ProductCard from "../productCard";
import products from "../../arr/products";
import Categories from "../button/Categories";
import ViewAll from "../button/ViewAll";

const OurMenu = () => {
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
      <Categories value={category} clickCategory={clickCategory} />
      <ProductCard
        products={products
          .filter((item) => item.category === category)
          .slice(0, showItem)}
      />
      <ViewAll clickShowItem={clickShowItem} />
    </>
  );
};

export default OurMenu;
