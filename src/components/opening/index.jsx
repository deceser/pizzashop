import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";

import { Button__Oppening } from "../../styles/button";
import { Box__Container, Card__Opening } from "../../styles/opening";
import background3 from "../../assets/image/background3.png";
import Header from "./Header";
import Title from "./TitleOpen";
import TimeTable from "./TimeTable";
import Reserv from "./Reserv";

const styles = {
  gridContainer: {
    backgroundImage: `url( ${background3}`,
    height: "550px",
  },
};

const OpeningTime = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <>
      <Reserv handleClose={handleClose} modalOpen={modalOpen} />

      <Paper style={styles.gridContainer} elevation={0}>
        <Box__Container>
          <Card__Opening>
            <Header />
            <CardContent>
              <Title />
              <TimeTable />
              <Box
                sx={{ display: "flex", justifyContent: "center", mb: "10px" }}
              >
                <Typography variant="caption" sx={{ color: "#676767" }}>
                  Book your table for lunch or dinner
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button__Oppening onClick={handleOpen}>
                  Book Now
                </Button__Oppening>
              </Box>
            </CardContent>
          </Card__Opening>
        </Box__Container>
      </Paper>
    </>
  );
};
export default OpeningTime;
