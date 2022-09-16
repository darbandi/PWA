import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import globalReducer from "./slices/global";
import countryReducer from "./slices/country";

const reducer = {
  auth: authReducer,
  global: globalReducer,
  country: countryReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
