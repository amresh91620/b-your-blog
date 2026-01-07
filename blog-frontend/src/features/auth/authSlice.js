import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  sendOtpThunk,
  verifyOtpThunk,
  registerThunk,
} from "./authThunk";

const initialState = {
  user: null,
  loading: false,
  error: null,
  otpSent: false,
  emailVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder

      /* LOGIN */
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* SEND OTP */
      .addCase(sendOtpThunk.fulfilled, (state) => {
        state.otpSent = true;
      })

      /* VERIFY OTP */
      .addCase(verifyOtpThunk.fulfilled, (state) => {
        state.emailVerified = true;
      })

      /* REGISTER */
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
