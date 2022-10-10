import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MenuBlock = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", p: "300px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          информация отсутствует
        </Typography>
      </Box>
    </div>
  );
};

export default MenuBlock;
