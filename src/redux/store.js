import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categorySlice from "./slices/categorySlice";
import cartSlice from "./slices/cartSlice";
import { authReducer } from "./slices/authSlice";
import { reviewReducer } from "./slices/reviewSlice";

const rootReduscer = combineReducers({
  categorySlice,
  cartSlice,
  authReducer,
  reviewReducer,
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

export const persistor = persistStore(store);
export default store;
