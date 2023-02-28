import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import profileReducer from "../Reducers/profileReducer";
import allProfileReducer from "../Reducers/allProfilesReducer";

const persistConfig = {
  key: "root ",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const allReducers = combineReducers({
  profiles: profileReducer,
  allProfiles: allProfileReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
