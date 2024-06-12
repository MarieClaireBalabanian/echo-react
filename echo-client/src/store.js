import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import categoriesReducer from './features/categories/categoriesSlice'



export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer
  },
})