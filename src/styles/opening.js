import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Card } from "@mui/material";

export const Box__Container = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "100px",
  paddingRight: "70px",
  ["@media screen and (min-width: 1000px) and (max-width: 1115px)"]: {
    justifyContent: "space-around",
  },
  ["@media screen and (min-width: 700px) and (max-width: 1000px)"]: {
    justifyContent: "space-around",
  },
}));

export const Card__Opening = styled(Card)(() => ({
  width: "420px",
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
}));

export const Box__Header = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FE5F1E",
  color: "white",
  height: "50px",
}));

export const Box__TitleOpen = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "10px",
}));

export const Box__TimeTable = styled(Box)(() => ({
  marginBottom: "10px",
  borderBottom: " 1px dashed ",
  borderColor: "#FE5F1E",
  display: "flex",
  justifyContent: "space-between",
}));
