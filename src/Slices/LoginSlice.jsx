import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { userData } = LoginSlice.actions;

export default LoginSlice.reducer;
