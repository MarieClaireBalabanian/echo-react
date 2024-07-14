import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: false,
  reducers: {
    setUserAuthStatus: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserAuthStatus } = authSlice.actions;

export default authSlice.reducer;
