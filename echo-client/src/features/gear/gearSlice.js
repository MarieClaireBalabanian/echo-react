import { createSlice } from '@reduxjs/toolkit'

export const gearSlice = createSlice({
  name: 'gear',
  initialState: [],
  reducers: {
    setUserGear: (state, action) => {
      return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserGear } = gearSlice.actions

export default gearSlice.reducer