import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Slider__Wraper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  ["@media screen and (min-width: 1000px) and (max-width: 1115px)"]: {
    display: "flex",
    flexWrap: "nowrap",
    width: "1000px",
  },
  ["@media screen and (min-width: 200px) and (max-width: 1000px)"]: {
    width: "900px",
    height: "410px",
  },
}));

export const Box__Wraper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "30px 0 0 30px",
}));
