import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser,
  sendOtp,
  verifyEmailOtp,
  completeRegistration,
  forgotPasswordRequest, // Import must be here
  resetPasswordConfirm,  // Import must be here
} from "../../services/authService";

/* LOGIN */
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await loginUser(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Login failed");
    }
  }
);

/* SEND OTP */
export const sendOtpThunk = createAsyncThunk(
  "auth/sendOtp",
  async (email, { rejectWithValue }) => {
    try {
      const res = await sendOtp(email);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "OTP send failed");
    }
  }
);

/* VERIFY OTP */
export const verifyOtpThunk = createAsyncThunk(
  "auth/verifyOtp",
  async (data, { rejectWithValue }) => {
    try {
      const res = await verifyEmailOtp(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Invalid OTP");
    }
  }
);

/* REGISTER */
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await completeRegistration(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Registration failed");
    }
  }
);

/* FORGOT PASSWORD */
export const forgotPasswordThunk = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const res = await forgotPasswordRequest(email); 
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Request failed");
    }
  }
);

/* RESET PASSWORD */
export const resetPasswordThunk = createAsyncThunk(
  "auth/resetPassword",
  async (data, { rejectWithValue }) => {
    try {
      // FIX: axios.post ki jagah service function use karein
      const res = await resetPasswordConfirm(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Reset failed");
    }
  }
);