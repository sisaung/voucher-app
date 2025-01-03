import axios from "axios";
import { getCookie } from "react-use-cookie";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    Accept: "Application/json",
  },
});
axiosInstance.interceptors.request.use((config) => {
  const token = getCookie("my_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
