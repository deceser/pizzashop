import React from "react";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelect } from "../../redux/slices/authSlice";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Review = () => {
  const isAuth = useSelector(isAuthSelect);
  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return <SimpleMDE />;
};

export default Review;
