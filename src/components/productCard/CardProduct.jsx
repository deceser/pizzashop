import React from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

import {
  Card__Product,
  Card__Media,
  Button__SelectedType,
  Button__SelectedSize,
  Button__Selected,
} from "../../styles/cardProduct";

import AddCart from "../button/AddCart";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function CardProduct({ title, price, image, size, type, id }) {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = React.useState("");
  const [activeSize, setActiveSize] = React.useState("");

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      image,
      size: [activeSize],
      type: [activeType],
    };
    dispatch(addItem(item));
  };

  return (
    <Card__Product elevation={0}>
      <Card__Media image={image} alt="pizza" />
      <CardContent>
        <Typography style={{ fontWeight: "bold" }}>{title}</Typography>
      </CardContent>
      <Button__Selected>
        <Box sx={{ display: "contents" }}>
          {type.map((types, index) => (
            <Button__SelectedType
              onClick={() => setActiveType(types)}
              key={index}
              sx={{
                background: activeType === types ? "#FFFFFF" : "",
                width: activeType === types ? "115px" : "115px",
                borderRadius: activeType === types ? "5px" : "5px",
                boxShadow:
                  activeType === types
                    ? "0px 2px 10px rgba(0, 0, 0, 0.10)"
                    : "",
              }}
            >
              {types}
            </Button__SelectedType>
          ))}
        </Box>
        <Box sx={{ display: "contents" }}>
          {size.map((sizes, index) => (
            <Button__SelectedSize
              onClick={() => setActiveSize(sizes)}
              key={index}
              sx={{
                background: activeSize === sizes ? "#FFFFFF" : "",
                width: activeSize === sizes ? "80px" : "80px",
                borderRadius: activeSize === sizes ? "5px" : "5px",
                boxShadow:
                  activeSize === sizes
                    ? "0px 2px 10px rgba(0, 0, 0, 0.10)"
                    : "",
              }}
            >
              {sizes}
            </Button__SelectedSize>
          ))}
        </Box>
      </Button__Selected>
      <Grid sx={{ display: "flex", marginTop: "15px", alignItems: "center" }}>
        <Typography sx={{ fontWeight: "bold", marginRight: "120px" }}>
          {price}$
        </Typography>
        <AddCart onClickAdd={onClickAdd} />
      </Grid>
    </Card__Product>
  );
}
