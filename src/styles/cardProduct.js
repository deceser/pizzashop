import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export const Box__ProductCard = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
}));

export const Card__Product = styled(Card)(() => ({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Card__Media = styled(CardMedia)(() => ({
  width: "250px",
  height: "250px",
  flexDirection: "column",

  transition: "0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.1)",
    textTransform: "none",
  },
}));

export const Button__Selected = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#F3F3F3",
  justifyContent: "space-around",
  alignContent: "space-around",
  borderRadius: "10px",
  width: "250px",
  height: "auto",
  padding: "5px",
}));

export const Button__SelectedType = styled(Button)(() => ({
  display: "flex",
  marginBottom: "5px",
  borderRadius: "5px",
  textTransform: "lowercase",
  width: "150px",
  height: "35px",
  color: "black",
  fontWeight: "bold",
  ":hover": {
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.10)",
    borderRadius: "5px",
    background: "#FFFFFF",
    textTransform: "none",
  },
}));

export const Button__SelectedSize = styled(Button)(() => ({
  borderRadius: "5px",
  textTransform: "lowercase",
  width: "95px",
  height: "35px",
  color: "black",
  fontWeight: "bold",
  mt: "4px",
  ":hover": {
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.10)",
    background: "#FFFFFF",
    textTransform: "none",
    borderRadius: "5px",
  },
}));

export const Button__AddCart = styled(Button)(() => ({
  width: "100px",
  height: "35px",
  borderRadius: "25px",
  border: "1px solid #FE5F1E",
  color: "#FE5F1E",
  fontWeight: "bold",
  textTransform: "none",
  ":hover": {
    backgroundColor: "#FE5F1E",
    color: "white",
  },
}));
