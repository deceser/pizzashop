import React from "react";

import { useForm } from "react-hook-form";

import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { Typography, Box } from "@mui/material";

import { Button__CallBack } from "../../styles/button";

const Registration = ({ registration, handleClose }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPass: "",
      firstName: "",
      lastName: "",
      city: "",
      homeAdress: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Dialog open={registration} onClose={handleClose}>
        <Box sx={{ height: "420px", width: "500px" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
              Create Account
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{ m: "10px 0 10px 10px", width: "480px" }}
              label="Email"
              color="info"
              error={Boolean(errors.email?.message)}
              placeholder={errors.email?.message}
              {...register("email", { required: "Enter your email" })}
            />
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <TextField
                sx={{ mb: "10px", width: "230px" }}
                id="0"
                label="Password"
                error={Boolean(errors.password?.message)}
                placeholder={errors.password?.message}
                color="info"
                {...register("password", { required: "Enter your password" })} // inputRef
              />

              <TextField
                sx={{ mb: "10px", width: "230px" }}
                id="1"
                label="Repeat Password"
                error={Boolean(errors.repeatPass?.message)}
                placeholder={errors.repeatPass?.message}
                color="info"
                {...register("repeatPass", { required: "Enter your password" })} // inputRef
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <TextField
                sx={{ mb: "10px", width: "230px" }}
                label="First Name"
                error={Boolean(errors.firstName?.message)}
                placeholder={errors.firstName?.message}
                color="info"
                {...register("firstName", {
                  required: "Enter your First Name",
                })}
              />

              <TextField
                sx={{ mb: "10px", width: "230px" }}
                id="outlined-textarea"
                label="Last Name"
                error={Boolean(errors.lastName?.message)}
                placeholder={errors.lastName?.message}
                color="info"
                {...register("lastName", {
                  required: "Enter your Last Name",
                })}
              />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-around" }}
              noValidate
            >
              <TextField
                sx={{ mb: "10px", width: "230px" }}
                id="outlined-textarea"
                label="City"
                error={Boolean(errors.city?.message)}
                placeholder={errors.city?.message}
                color="info"
                {...register("city", {
                  required: "Enter your City",
                })}
              />

              <TextField
                sx={{ mb: "10px", width: "230px" }}
                label="Home Address"
                error={Boolean(errors.homeAdress?.message)}
                placeholder={errors.homeAdress?.message}
                color="info"
                {...register("homeAdress", {
                  required: "Enter your Home Adress",
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
