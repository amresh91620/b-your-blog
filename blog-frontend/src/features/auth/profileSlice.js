import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "../../services/profileService";
import { changePassword as changePasswordAPI, logoutAllSessions as logoutAllAPI, deleteAccount as deleteAccountAPI } from "../../services/authService";

// Fetch profile
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      return await profileService.fetchProfile();
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Failed to fetch profile");
    }
  }
);

// Update profile
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (data, { rejectWithValue }) => {
    try {
      return await profileService.updateProfile(data);
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Failed to update profile");
    }
  }
);

// Change password
export const changePassword = createAsyncThunk(
  "profile/changePassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await changePasswordAPI(data);
      return response.data.msg;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Failed to change password");
    }
  }
);

// Logout all sessions
export const logoutAllSessions = createAsyncThunk(
  "profile/logoutAllSessions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await logoutAllAPI();
      return response.data.msg;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Failed to logout all sessions");
    }
  }
);

// Delete account
export const deleteAccount = createAsyncThunk(
  "profile/deleteAccount",
  async (password, { rejectWithValue }) => {
    try {
      const response = await deleteAccountAPI(password);
      return response.data.msg;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Failed to delete account");
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    loading: false,
    error: null,
    passwordLoading: false,
    dangerLoading: false,
  },
  reducers: {
    clearProfile: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.passwordLoading = false;
      state.dangerLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchProfile.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
      .addCase(fetchProfile.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(updateProfile.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(updateProfile.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
      .addCase(updateProfile.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(changePassword.pending, (state) => { state.passwordLoading = true; state.error = null; })
      .addCase(changePassword.fulfilled, (state) => { state.passwordLoading = false; })
      .addCase(changePassword.rejected, (state, action) => { state.passwordLoading = false; state.error = action.payload; })
      .addCase(logoutAllSessions.pending, (state) => { state.dangerLoading = true; state.error = null; })
      .addCase(logoutAllSessions.fulfilled, (state) => { state.dangerLoading = false; })
      .addCase(logoutAllSessions.rejected, (state, action) => { state.dangerLoading = false; state.error = action.payload; })
      .addCase(deleteAccount.pending, (state) => { state.dangerLoading = true; state.error = null; })
      .addCase(deleteAccount.fulfilled, (state) => { state.dangerLoading = false; })
      .addCase(deleteAccount.rejected, (state, action) => { state.dangerLoading = false; state.error = action.payload; });
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
