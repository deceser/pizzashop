import React from "react";
import Container from "@mui/material/Container";

import { useSelector, useDispatch } from "react-redux";
import { setCartOpen } from "./redux/slices/openCartSlice";

import { Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/header";
import Cart from "./components/cart";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
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
    <div>
      <Cart cartOpen={CartOpen} cartClose={CloseClickCart} />
      <Header openClickCart={clickCart} />
      <Container style={{ padding: "0px", backgroundColor: "#fff" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Container>
      <Footer/>
    </div>
  );
}
export default App;
