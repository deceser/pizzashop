import React from "react";
import { useSelector } from "react-redux";

import CardBasket from "./CardBasket";
import { Box__Card } from "../../styles/cardBasket";
import CartEmpty from "./CartEmpty";

const CartItem = () => {
  const { items } = useSelector((state) => state.cartSlice);

  return (
    <Box__Card>
      {items.map((item) => (
        <CardBasket key={item.id} {...item} />
      ))}
    </Box__Card>
  );
};
export default CartItem;
