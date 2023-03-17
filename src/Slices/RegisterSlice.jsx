import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerUsers: [],
  error: "",
};

export const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerData: (state, action) => {
      const checkUser = state.registerUsers.find(
        (user) => user.email == action.payload.email
      );
      if (checkUser) {
        alert("This user is appear");
        state.error = "This user is appear";
      } else {
        state.registerUsers = [...state.registerUsers, action.payload];
      }
    },
  },
});

export const { registerData } = RegisterSlice.actions;

export default RegisterSlice.reducer;
