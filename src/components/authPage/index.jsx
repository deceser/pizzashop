import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";

import Registration from "../registrationForm";
import Logo from "./Logo";
import Register from "../button/Register";
import SingIn from "../button/SingIn";

const Auth = () => {
  const [registration, setRegistration] = React.useState(false);

  const handleClickOpen = () => {
    setRegistration(true);
  };

  const handleClose = () => {
    setRegistration(false);
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Registration registration={registration} handleClose={handleClose} />
      <Container style={{ padding: "80px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Logo />

            <TextField
              sx={{
                mb: "10px",
                width: "300px",
              }}
              // type="email"
              label="Email"
              error={Boolean(errors.email?.message)}
              placeholder={errors.email?.message}
              color="info"
              {...register("email", { required: "Enter your email" })}
            />
            <TextField
              sx={{ mb: "10px", width: "300px" }}
              // type="password"
              label="Password"
              error={Boolean(errors.password?.message)}
              placeholder={errors.password?.message}
              color="info"
              {...register("password", { required: "Enter your password" })} // inputRef
            />
            <Box sx={{ display: "flex", mt: "10px" }}>
              <Register handleClickOpen={handleClickOpen} />
              <SingIn />
            </Box>
          </Box>
        </form>
      </Container>
    </>
  );
};
export default Auth;
