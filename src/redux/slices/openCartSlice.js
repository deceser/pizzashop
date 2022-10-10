import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartOpen: false,
};

//  const categorySlice = createSlice ({
//   name: "categories",
//   initialState,
//   reducers : {
//     setCategory: (state,action) =>  {
//       state.category =
//     }
//   }
// })
// вариант документации

const openCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartOpen(state, action) {
      state.CartOpen = action.payload;
    },
  },
});

// в стейт сохраняем, что придет в action.payload

export const { setCartOpen } = openCartSlice.actions;

export default openCartSlice.reducer;
