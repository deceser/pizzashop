import React from "react";

import CardProduct from "./CardProduct";
import { Box__ProductCard } from "../../styles/cardProduct";

export default function CardGreed({ products }) {
  return (
    <Box__ProductCard>
      {products.map((item, id) => (
        <CardProduct
          title={item.title}
          image={item.image}
          price={item.price}
          type={item.type}
          size={item.size}
          key={id}
          id={item.id}
        />
      ))}
    </Box__ProductCard>
  );
}
