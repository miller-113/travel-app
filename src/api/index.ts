import axios from "axios";

const api = axios.create({
  baseURL: process.env.APP_BASE_URL || "https://travel-app-api.up.railway.app/api/v1",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
