import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 2,
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

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

// в стейт сохраняем, что придет в action.payload

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
