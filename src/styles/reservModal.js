import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

export const Box__Modal = styled(Box)(() => ({
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  height: "250px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
  padding: 4,
}));
