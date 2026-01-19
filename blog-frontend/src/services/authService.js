import axios from "axios";

const API = axios.create({
  baseURL: "/api/auth",
  withCredentials: true
});

export const sendOtp = (email) => API.post("/send-otp", { email });
export const verifyEmailOtp = (data) => API.post("/verify-otp", data);
export const completeRegistration = (data) => API.post("/complete-registration", data);
export const loginUser = (data) => API.post("/login", data);
export const forgotPasswordRequest = (email) =>
  API.post("/forgot-password", { email });
export const resetPasswordConfirm = (data) =>
  API.post("/reset-password", data);
