import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendMessage } from "../../services/contactService";

export const sendMessageThunk = createAsyncThunk(
  "contact/sendMessage",
  async (message, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await sendMessage(message, token);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || "Failed to send message");
    }
  }
);
