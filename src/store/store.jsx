import { configureStore } from "@reduxjs/toolkit";
import RootSlice from "../Slices/RootSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootSlice);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: [],
});

export const persistor = persistStore(store);
