import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/contact",
  withCredentials: true 
});

export const sendMessage = (message, token) => 
  API.post("/send-message", { message }, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getAllMessages = () => API.get("/messages");

export const markMessageAsRead = (id) => API.patch(`/messages/${id}/read`);
