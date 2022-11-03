import React from "react";

import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";

import { Button__BuyNow } from "../../styles/button";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelect } from "../../redux/slices/authSlice";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Review = () => {
  const isAuth = useSelector(isAuthSelect);
  const [value, setValue] = React.useState("");

  const handleChangeFile = () => {};

  const onCliclRemoveImage = () => {};

  const onChange = React.useCallback((value) => {
    setValue(value);
  });

  const option = React.useMemo(() => ({
    spellChecker: false,
    autofocus: true,
    placeholder: "",
    status: false,
    autosave: {
      enabled: true,
      delay: 1000,
    },
  }));

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper elevation={0} style={{ padding: 30 }}>
      <SimpleMDE value={value} onChange={onChange} options={option} />
      <Box sx={{ mt: 2 }}>
        <Button__BuyNow>Send</Button__BuyNow>
      </Box>
    </Paper>
  );
};

export default Review;
