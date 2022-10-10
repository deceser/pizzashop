import React from "react";
import Typography from "@mui/material/Typography";

import { Box__TitleOpen } from "../../styles/opening";

export const TitleOpen = () => {
  return (
    <Box__TitleOpen>
      <Typography sx={{ color: "black", fontWeight: "bold", fontSize: "25px" }}>
        Opening Times
      </Typography>
      <Typography variant="caption" sx={{ color: "#FE5F1E", fontSize: "13px" }}>
        Open 7 Days Week
      </Typography>
    </Box__TitleOpen>
  );
};
export default TitleOpen;
