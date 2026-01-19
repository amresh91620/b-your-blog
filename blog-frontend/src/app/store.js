import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import contactReducer from "../features/contact/contactSlice";
import profileReducer from '../features/auth/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    profile: profileReducer,
  },
});
