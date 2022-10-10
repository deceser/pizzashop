import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import leave from "../../assets/icons/leave.png"

const leaveReviews = () => {
  return (
    <Paper sx={{backgroundColor:"#8DCC03", height:"50px"}}>
      <Box sx={{display:"flex", justifyContent:"center", pt:"15px"}}>
        <img src={leave} alt="leave" width="30px" />
        <Typography sx={{ml:"10px"}}>
		Leave your feedback about the PIZZA place or a recent delivery
		    </Typography>
      </Box>
    </Paper>
  );
}
export default leaveReviews;