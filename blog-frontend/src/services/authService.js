import axios from "axios";

const API = axios.create({
  baseURL: "/api/auth",
  withCredentials: true
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const sendOtp = (email) => API.post("/send-otp", { email });
export const verifyEmailOtp = (data) => API.post("/verify-otp", data);
export const completeRegistration = (data) => API.post("/complete-registration", data);
export const loginUser = (data) => API.post("/login", data);
export const forgotPasswordRequest = (email) =>
  API.post("/forgot-password", { email });
export const resetPasswordConfirm = (data) =>
  API.post("/reset-password", data);
export const changePassword = (data) =>
  API.post("/change-password", data);
export const logoutAllSessions = () =>
  API.post("/logout-all-sessions");
export const deleteAccount = (password) =>
  API.delete("/delete-account", { data: { password } });
