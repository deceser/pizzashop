import React from "react";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Box__Modal } from "../../styles/reservModal";
import { Box } from "@mui/material";

const Reserv = ({ handleClose, modalOpen }) => {
  return (
    <div>
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
          </Box>
        </Box__Modal>
      </Modal>
    </div>
  );
};
export default Reserv;
