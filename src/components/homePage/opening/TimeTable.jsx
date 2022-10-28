import React from "react";
import Typography from "@mui/material/Typography";

import opening from "../../../arr/opening";
import { Box__TimeTable } from "../../../styles/opening";

const TimeTable = () => {
  return (
    <>
      {opening.map((item, index) => (
        <Box__TimeTable key={index}>
          <Typography>{item.day}</Typography>
          <Typography>{item.time}</Typography>
        </Box__TimeTable>
      ))}
    </>
  );
};
export default TimeTable;
