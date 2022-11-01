import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

export const userAuth = createAsyncThunk("auth/userAuth", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});

export const userAuthMe = createAsyncThunk("auth/userAuthMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});

export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async (params) => {
    const { data } = await axios.post("/auth/register", params);
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [userAuth.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [userAuth.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [userAuth.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [userAuthMe.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [userAuthMe.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [userAuthMe.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [userRegister.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [userRegister.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const isAuthSelect = (state) => Boolean(state.authReducer.data);
export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
