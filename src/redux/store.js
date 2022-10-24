import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import categorySlice from "./slices/categorySlice";
import cartSlice from "./slices/cartSlice";
// import openCartSlice from "./slices/openCartSlice"; // drawer

const rootReduscer = combineReducers({
  categorySlice,
  cartSlice,
  // openCartSlice, // drawer
});

const persistConfig = {
  key: "root",
  storage,
};

const persisedReducer = persistReducer(persistConfig, rootReduscer);

const store = configureStore({
  reducer: persisedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const store = configureStore({
//   reducer: {
//     categorySlice,
//     cartSlice,
//     openCartSlice,
//   },
// });

export const persistor = persistStore(store);
export default store;
