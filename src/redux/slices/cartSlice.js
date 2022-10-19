import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.fullPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.fullPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.fullPrice = 0;

      state.fullPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
});

export const { addItem, removeItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;

// addItem(state, action) {
//   state.items.push(action.payload);
//   state.fullPrice = state.items.reduce((sum, obj) => {
//     return obj.price + sum;
//   }, 0);
// }, так тоже работает, но пиццы дублирует, а не пушит вместе.

//==================================================================

// plusItem(state, action) {
//   const findItem = state.items.find((obj) => obj.title === action.payload);

//   if (findItem) {
//     findItem.count++;
//   }
// }, использую addItem чтобы добавить больще товаров в корзине

// addItem(state, action) {
//   const findItem = state.items.find((obj) => obj.id === action.payload.id);
//   if (findItem) {
//     findItem.count++;
//   } else {
//     state.items.push({
//       ...action.payload,
//       count: 1,
//     });
//   }

//   state.fullPrice = state.items.reduce((sum, obj) => {
//     return obj.price * obj.count + sum;
//   }, 0);
// },

// minusItem(state, action) {
//   const findItem = state.items.find((obj) => obj.id === action.payload);

//   if (findItem) {
//     findItem.count--;
//   }

//   state.fullPrice = state.items.reduce((sum, obj) => {
//     return obj.price * obj.count + sum;
//   }, 0);
// },

// removeItem(state, action) {
//   state.items = state.items.filter((obj) => obj.id !== action.payload);
//   state.fullPrice = 0;

//   state.fullPrice = state.items.reduce((sum, obj) => {
//     return obj.price * obj.count + sum;
//   }, 0);
// },
