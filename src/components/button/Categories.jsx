import React from "react";
import Grid from "@mui/material/Grid";
import { Button__Categories } from "../../styles/button";
import { buttonCategory } from "../../arr/button";

export default function Category({ value, clickCategory }) {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "450px",
        }}
      >
        {buttonCategory.map((title, index) => (
          <Button__Categories
            key={index}
            onClick={() => clickCategory(index)}
            variant="outlined"
            sx={{
              background: value === index ? "#8DCC03" : "",
              borderRadius: value === index ? "20px" : "",
              color: value === index ? "white" : "",
              border: value === index ? "1px solid #8DCC03" : "",
              transform: value === index ? "scale(1.1)" : "",
            }}
          >
            {title.title}
          </Button__Categories>
        ))}
      </Grid>
    </Grid>
  );
}
