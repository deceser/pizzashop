import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Cart__Header = styled(Box)(() => ({
  width: "410px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  borderBottom: " 1px solid ",
  borderColor: "#E8EAEF",
}));

export const Box__Price = styled(Box)(() => ({
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
}));
