import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import cartSlice from "./slices/cartSlice";
import openCartSlice from "./slices/openCartSlice";

export const store = configureStore({
  reducer: {
    categorySlice,
    cartSlice,
    openCartSlice,
  },
});
