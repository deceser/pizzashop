import React from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Delivery = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: " center",
      }}
    >
      <Box>
        <DeliveryDiningIcon
          sx={{ color: "white", mr: "20px", fontSize: "40px" }}
        />
      </Box>
      <Box>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          1700 +
        </Typography>
        <Typography variant="caption" sx={{ color: "white" }}>
          Delivery
        </Typography>
      </Box>
    </Box>
  );
};
export default Delivery;
