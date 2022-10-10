import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/system";

export const Box__Card = styled(Box)(() => ({
  display: "flex",
  flexGrow: "1",
  flexDirection: "column",
  padding: "17px",
}));

export const Card__Basket = styled(Card)(() => ({
  display: "flex",
  alignItems: "center",
  mb: "10px",
  mr: "20px",
  ml: "20px",
  borderBottom: " 1px solid ",
  borderColor: "#E8EAEF",
}));

export const Card__Media = styled(CardMedia)(() => ({
  width: "100px",
  height: "100px",
  padding: "20px",
  cursor: "pointer",
}));

export const Box__Count = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}));
