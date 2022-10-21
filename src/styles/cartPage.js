import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Box__Container = styled(Box)(() => ({
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  ["@media screen and (min-width: 1000px) and (max-width: 1115px)"]: {
    width: "800px",
  },
}));

export const Box__cartHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: " 1px solid ",
  borderColor: "#E8EAEF",
  padding: "20px",
}));

export const Box__cartPage = styled(Box)(() => ({
  padding: "0px",
  backgroundColor: "white",
  display: "flex",
  width: "500px",
}));
