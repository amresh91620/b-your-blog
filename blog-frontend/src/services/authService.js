import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true 
});

export const sendOtp = (email) => API.post("/send-otp", { email });
export const verifyEmailOtp = (data) => API.post("/verify-otp", data);
export const completeRegistration = (data) => API.post("/complete-registration", data);
export const loginUser = (data) => API.post("/login", data);
// Ye functions thunks mein use honge
export const forgotPasswordRequest = (email) => API.post("/forgot-password", { email });
export const resetPasswordConfirm = (data) => API.post("/reset-password", data);