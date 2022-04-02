import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    logout: (state, action) => {
      localStorage.clear();
      return action.payload;
    },
    login: (state, action) => {
      return action.payload;
    },
  },
});

export default logoutSlice.reducer;
export const { login, logout } = logoutSlice.actions;
