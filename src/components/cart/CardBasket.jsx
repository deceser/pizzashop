import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, minusItem } from "../../redux/slices/cartSlice";

import { Card__Basket, Card__Media, Box__Count } from "../../styles/cardBasket";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function CardBasket({
  count,
  title,
  image,
  price,
  size,
  type,
  id,
}) {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        title,
        image,
        price,
        size,
        type,
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <Card__Basket elevation={0}>
      <Card__Media component="img" image={image} alt="pizza" />
      <Box sx={{ flexGrow: "1" }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: "5px" }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: "#9B9B9B" }}>
          {type} {size}
        </Typography>
        <Typography sx={{ mt: "7px" }}>{price} $</Typography>
      </Box>
      <Box__Count>
        <Box sx={{ mb: "30px" }}>
          <IconButton
            sx={{ fontWeight: "bold", color: "#FE5F1E" }}
            onClick={onClickRemove}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{ color: "#FE5F1E" }}
            onClick={count > 1 ? onClickMinus : onClickRemove}
          >
            <RemoveOutlinedIcon />
          </IconButton>
          <Typography sx={{ color: "#9B9B9B", fontWeight: "bold" }}>
            {count}
          </Typography>
          <IconButton sx={{ color: "#FE5F1E" }} onClick={onClickPlus}>
            <AddOutlinedIcon />
          </IconButton>
        </Box>
      </Box__Count>
    </Card__Basket>
  );
}
