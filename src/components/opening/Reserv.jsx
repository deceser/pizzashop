import React from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Button__CallBack } from "../../styles/button";
import { Box__Modal } from "../../styles/reservModal";
import { Box } from "@mui/material";
import CallBackDone from "./CallBackDone";
const Reserv = ({ handleClose, modalOpen }) => {
  const [doneOpen, setDoneOpen] = React.useState(false);
  const modalDoneOpen = () => setDoneOpen(true);
  const handleDoneClose = () => setDoneOpen(false);

  return (
    <div>
      <CallBackDone
        handleDoneClose={handleDoneClose}
        modalDoneOpen={doneOpen}
      />
      <Modal open={modalOpen} onClose={handleClose}>
        <Box__Modal>
          <Box
            className="modal"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ mb: "50px" }}>
              <Typography
                id="modal-modal-title"
                sx={{ fontWeight: "bold", fontSize: "30px" }}
              >
                Call Me
              </Typography>
            </Box>

            <Box>
              <PhoneInput country="ua" regions={"europe"} />
            </Box>
            <Box sx={{ mt: "50px" }}>
              <Button__CallBack onClick={handleClose}>
                Call Back
              </Button__CallBack>
            </Box>
          </Box>
        </Box__Modal>
      </Modal>
    </div>
  );
};
export default Reserv;
