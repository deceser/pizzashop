import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Box__Review = styled(Box)(() => ({
  height: "300px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const Box__Card = styled(Box)(() => ({
  maxWidth: "230px",
  borderRadius: "30px",
  width: "350",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 30px 0 30px",
  marginRight: "30px",
  backgroundColor: "#F5F5F5",
}));
