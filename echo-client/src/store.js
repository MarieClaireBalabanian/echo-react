import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/user/authSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import gearReducer from "./features/gear/gearSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    categories: categoriesReducer,
    gear: gearReducer,
  },
});
