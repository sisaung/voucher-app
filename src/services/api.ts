import axios from "axios";
import { AuthData, LoginFormSchema, RegisterFormSchema } from "../types/auth";

const BASE_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "Application/json",
    "Content-Type": "application/json",
  },
});

// axiosInstance.defaults.headers.common["Authorization"] = `Bearer `

export const createAuth = async (
  endPoint: string,
  data: RegisterFormSchema | LoginFormSchema
) => {
  const res = await axiosInstance.post<AuthData>(`/${endPoint}`, data);
  return res.data;
};
