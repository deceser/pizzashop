import React from "react";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Payment = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", p: "20px" }}>
          Payment and Delivery
        </Typography>
      </Box>
      <Box>
        <TextField
          sx={{
            ml: 2,
            width: "495px",
            ["@media screen and (min-width: 1000px) and (max-width: 1115px)"]: {
              width: "240px",
            },
            ["@media screen and (min-width: 200px) and (max-width: 1000px)"]: {
              width: "240px",
            },
          }}
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          multiline
          color="info"
        />
      </Box>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", p: "20px" }}>
          Shipping address
        </Typography>
        <Box>
          <TextField
            sx={{
              ml: 2,
              mt: 2,
              width: "240px",
            }}
            id="outlined-textarea"
            label="First Name"
            placeholder="John"
            multiline
            color="info"
          />
          <TextField
            sx={{
              ml: 2,
              mt: 2,
              width: "240px",
            }}
            id="outlined-textarea"
            label="Last Name"
            placeholder="Smith"
            multiline
            color="info"
          />
          <TextField
            sx={{
              ml: 2,
              mt: 2,
              width: "240px",
            }}
            id="outlined-textarea"
            label="City"
            placeholder="London"
            multiline
            color="info"
          />
          <TextField
            sx={{
              ml: 2,
              mt: 2,
              width: "240px",
            }}
            id="outlined-textarea"
            label="Home Address"
            placeholder="Baker Street 221b"
            multiline
            color="info"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Payment;
