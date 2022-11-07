import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isAuthSelect } from "../../redux/slices/authSlice";
import axios from "../../axios";

import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { Button__BuyNow } from "../../styles/button";

const Review = () => {
  const isAuth = useSelector(isAuthSelect);
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    const bearer_token = `Bearer ${localStorage.getItem("token")}`;
    try {
      setLoading(true);

      const responseData = await axios.post(
        "/review",
        {
          text: text,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: bearer_token,
          },
        }
      );

      return responseData;
    } catch (err) {
      console.warn(err);
      alert("err new review");
    }
  };

  const option = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "123",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: "mde-autosave-demo",
      },
    }),
    []
  );

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper elevation={0} style={{ padding: 30 }}>
      <SimpleMDE value={text} onChange={onChange} options={option} />
      <Box sx={{ mt: 2 }}>
        <Button__BuyNow onClick={onSubmit}>Send</Button__BuyNow>
      </Box>
    </Paper>
  );
};

export default Review;
