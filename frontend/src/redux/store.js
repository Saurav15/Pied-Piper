import { configureStore } from "@reduxjs/toolkit";
import logoutSlice from "./userReducer"

const store = configureStore({
  reducer: {
    login: logoutSlice,
  },
});
export default store;
