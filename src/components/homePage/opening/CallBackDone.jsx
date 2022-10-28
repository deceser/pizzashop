import React from "react";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Box__Modal } from "../../../styles/reservModal";
import { Box } from "@mui/material";

const CallBackDone = ({ handleDoneClose, modalDoneOpen }) => {
  return (
    <div>
      <Modal open={modalDoneOpen} onClose={handleDoneClose}>
        <Box__Modal>
          <Box>
            <Typography>Done!</Typography>
          </Box>
        </Box__Modal>
      </Modal>
    </div>
  );
};
export default CallBackDone;
