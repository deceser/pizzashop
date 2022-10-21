import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";

export const Container__Wraper = styled(Container)(() => ({
  padding: "0px",
  backgroundColor: "#fff",
  ["@media screen and (min-width: 1000px) and (max-width: 1115px)"]: {
    width: "800px",
  },
}));
