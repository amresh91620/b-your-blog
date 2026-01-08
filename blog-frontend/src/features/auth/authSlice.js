import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  sendOtpThunk,
  verifyOtpThunk,
  registerThunk,
  forgotPasswordThunk,
  resetPasswordThunk,
} from "./authThunk";

// localStorage se user restore karo
const getUserFromStorage = () => {
  try {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      return JSON.parse(user);
    }
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
  }
  return null;
};

const initialState = {
  user: getUserFromStorage(),
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
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        // localStorage mein save karo
        if (action.payload.token) {
          localStorage.setItem("token", action.payload.token);
        }
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendOtpThunk.fulfilled, (state) => {
        state.otpSent = true;
      })
      .addCase(verifyOtpThunk.fulfilled, (state) => {
        state.emailVerified = true;
      })
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(forgotPasswordThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPasswordThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetPasswordThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAuthState, logout } = authSlice.actions;
export default authSlice.reducer;
