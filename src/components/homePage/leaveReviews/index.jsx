import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelect } from "../../../redux/slices/authSlice";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";

const LeaveReviews = () => {
  const isAuth = useSelector(isAuthSelect);
  const navigate = useNavigate();
  const clickNewReview = () => {
    navigate("/review");
  };

  return (
    <Paper
      sx={{ backgroundColor: "#8DCC03", height: "50px", borderRadius: "0px" }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <IconButton onClick={clickNewReview} disabled={!isAuth} size="large">
          <RateReviewIcon />
        </IconButton>

        <Typography sx={{ ml: "10px" }}>
          Leave your feedback about the PIZZA place or a recent delivery
        </Typography>
      </Box>
    </Paper>
  );
};
export default LeaveReviews;
