import { applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// Every store requires reducer
// root-reducer

const persistConfig = {
  key: "root", //persist the whole thing
  storage,
  whitelist: ["cart"], //user is already persisted with authlistener
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// runs before an action hits an reducer
const middleWares = [
  process.env.NODE_ENV === "production" && logger,
  thunk,
].filter(Boolean);

const composedEnhancers = applyMiddleware(...middleWares);

export const store = configureStore({
  reducer:  persistedReducer ,
});

export const persistor = persistStore(store); //export into index js
