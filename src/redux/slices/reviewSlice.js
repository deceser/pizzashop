import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

export const fetchReview = createAsyncThunk(
  "/reviews/fetchReview",
  async () => {
    const { data } = await axios.get("/reviews");
    return data;
  }
);

const initialState = {
  review: {
    items: [],
    status: "loading",
  },
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReview.pending]: (state) => {
      state.review.status = "loading";
      state.review.items = [];
    },
    [fetchReview.fulfilled]: (state, action) => {
      state.review.status = "loaded";
      state.review.items = action.payload;
    },
    [fetchReview.rejected]: (state) => {
      state.review.status = "error";
      state.review.items = [];
    },
  },
});

export const reviewReducer = reviewSlice.reducer;
