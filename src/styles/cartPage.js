import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Box__Container = styled(Box)(() => ({
  padding: "0 300px 100px 300px",
  backgroundColor: "white",
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
}));
