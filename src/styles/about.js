import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Box__Container = styled(Box)(() => ({
  justifyContent: "space-around",
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  paddingTop: "30px",
  height: "500px",
  backgroundColor: "#F3F3F3",
  ["@media screen and (min-width: 1000px) and (max-width: 1115px)"]: {
    flexDirection: "column-reverse",
    paddingTop: "10px",
    height: "600px",
  },
  ["@media screen and (min-width: 200px) and (max-width: 1000px)"]: {
    flexDirection: "column-reverse",
    paddingTop: "10px",
    height: "600px",
  },
}));
