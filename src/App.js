import React from "react";
import Container from "@mui/material/Container";

import { useSelector, useDispatch } from "react-redux";
import { setCartOpen } from "./redux/slices/openCartSlice";

import { Routes, Route } from "react-router-dom";

import { Container__Wraper } from "./styles/wraper";
import "./index.css";
import Header from "./components/header";
import Cart from "./components/cart";
import Home from "./pages/Home";
import SingIn from "./pages/SingInPage";
import Menu from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/footer";

function App() {
  const dispatch = useDispatch();
  const CartOpen = useSelector((state) => state.openCartSlice.CartOpen);

  const clickCart = () => {
    dispatch(setCartOpen(true));
  };

  const CloseClickCart = () => {
    dispatch(setCartOpen(false));
  };

  // const [openCart, setOpenCart] = React.useState(false);
  return (
    <>
      <Cart cartOpen={CartOpen} cartClose={CloseClickCart} />
      <Container__Wraper style={{ padding: "0px" }}>
        <Header openClickCart={clickCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/SingIn" element={<SingIn />} />
        </Routes>
        <Footer />
      </Container__Wraper>
    </>
  );
}
export default App;
