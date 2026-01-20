import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: "/api/profile",
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const profileService = {
  fetchProfile: async () => {
    const res = await API.get("/");
    return res.data; // user object with full profileImage URL
  },

  updateProfile: async (data) => {
    const formData = new FormData();
    if (data.name) formData.append("name", data.name);
    if (data.bio) formData.append("bio", data.bio);
    if (data.avatar) formData.append("profileImage", data.avatar);

    const res = await API.patch("/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data.user; // updated user
  },
};

export default profileService;
