import { Box } from "@mui/material";
import React from "react";
import { Button__ViewAll } from "../../styles/button";
const ViewAll = ({ clickShowItem }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "30px",
      }}
    >
      <Button__ViewAll variant="contained" onClick={clickShowItem}>
        View All
      </Button__ViewAll>
    </Box>
  );
};

export default ViewAll;
