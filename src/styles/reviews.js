import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Box__Review = styled(Box)(() => ({
  height: "300px",
  padding: "50px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  ["@media screen and (min-width: 1000px) and (max-width: 1115px)"]: {
    justifyContent: "center",
  },
  ["@media screen and (min-width: 700px) and (max-width: 1000px)"]: {
    justifyContent: "center",
  },
}));

export const Box__Card = styled(Box)(() => ({
  maxWidth: "250px",
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 30px 0 30px",
  backgroundColor: "#F5F5F5",
}));

export const Box__Title = styled(Box)(() => ({
  maxWidth: "390px",
  ["@media screen and (min-width: 1000px) and (max-width: 1115px)"]: {
    display: "none",
  },
  ["@media screen and (min-width: 700px) and (max-width: 1000px)"]: {
    display: "none",
  },
}));
