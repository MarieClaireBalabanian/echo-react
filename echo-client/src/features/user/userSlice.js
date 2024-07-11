import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUserProfile: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;
