import React from "react";
import { Routes, Route } from "react-router-dom";

import { Container__Wraper } from "./styles/wraper";
import "./index.css";
import Header from "./components/header";
import Cart from "./components/cart";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Menu from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/footer";
import Review from "./components/reviewPage";

function App() {
  const [openCart, setOpenCart] = React.useState(false);

  const clickCartOpen = () => {
    setOpenCart(true);
  };

  const clickCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <>
      <Cart cartOpen={openCart} cartClose={clickCloseCart} />
      <Container__Wraper style={{ padding: "0px" }}>
        <Header openClickCart={clickCartOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/authorization" element={<AuthPage />} />
          <Route path="/review" element={<Review />} />
        </Routes>
        <Footer />
      </Container__Wraper>
    </>
  );
}
export default App;
