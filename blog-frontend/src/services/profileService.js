import axios from "axios";

// Axios instance for profile APIs
const API = axios.create({
  baseURL: "/api/profile", // ✅ Correct endpoint
  withCredentials: true,
});

// Attach JWT token from localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const profileService = {
  // GET PROFILE
  fetchProfile: async () => {
    const res = await API.get("/"); // ✅ GET /api/profile
    return res.data;
  },

  // UPDATE PROFILE (with image upload)
  updateProfile: async (data) => {
    const formData = new FormData();
    if (data.name) formData.append("name", data.name);
    if (data.bio) formData.append("bio", data.bio);
    if (data.avatar) formData.append("profileImage", data.avatar);

    const res = await API.patch("/", formData, { // ✅ PATCH /api/profile
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data.user; // returns updated user
  },
};

export default profileService;
