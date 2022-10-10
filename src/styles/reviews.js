import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Box__Review = styled(Box)(() => ({
  height: "300px",
  padding:"50px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
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
