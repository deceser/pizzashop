import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isAuthSelect, userRegister } from "../../redux/slices/authSlice";
import { useForm } from "react-hook-form";

import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { Typography, Box } from "@mui/material";

import { Button__CallBack } from "../../styles/button";

const Registration = ({ registration, handleClose }) => {
  const isAuth = useSelector(isAuthSelect);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });

  const onSubmit = async (values) => {
    const data = await dispatch(userRegister(values));
    if (!data.payload) {
      return alert("Failed to register");
    }
    if (data.payload) {
      dispatch(userRegister(values));
    }
  };

  if (isAuth) {
    return <Navigate to="/authorization" />;
  }

  return (
    <>
      <Dialog open={registration} onClose={handleClose}>
        <Box sx={{ height: "340px", width: "500px" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>Create Account</Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{ m: "10px 0 10px 10px", width: "480px" }}
              type="email"
              label="Email"
              color="info"
              error={Boolean(errors.email?.message)}
              placeholder={errors.email?.message}
              {...register("email", { required: "Enter your email" })}
            />
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <TextField
                sx={{ mb: "10px", width: "480px" }}
                id="0"
                label="Password"
                error={Boolean(errors.password?.message)}
                placeholder={errors.password?.message}
                color="info"
                {...register("password", { required: "Enter your password" })} // inputRef
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <TextField
                sx={{ mb: "10px", width: "480px" }}
                label="Name"
                error={Boolean(errors.fullName?.message)}
                placeholder={errors.fullName?.message}
                color="info"
                {...register("fullName", {
                  required: "Enter your First Name",
                })}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
              <Button__CallBack type="submit">Registration</Button__CallBack>
            </Box>
          </form>
        </Box>
      </Dialog>
    </>
  );
};
export default Registration;
