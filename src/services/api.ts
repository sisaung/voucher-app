import axios from "axios";
import { AuthData, LoginFormSchema, RegisterFormSchema } from "../types/auth";
import { getCookie } from "react-use-cookie";
import { Products, ShowProduct } from "../types/product";

const BASE_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "Application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${getCookie(
  "my_token"
)}`;

export const storeAuth = async (
  endPoint: string,
  data: RegisterFormSchema | LoginFormSchema
) => {
  const res = await axiosInstance.post<AuthData>(`/${endPoint}`, data);
  return res.data;
};

// export const fetchData = async <T>(endPoint: string): Promise<T> => {
//   const res = await axiosInstance.get<T>(`/${endPoint}`);
//   return res.data;
// };

export const fetchProducts = async (endPoint: string, params: any) => {
  const res = await axiosInstance.get<Products>(`/${endPoint}${params}`);

  return res.data;
};

export const showProduct = async (endPoint: string, id: number) => {
  const res = await axiosInstance.get<ShowProduct>(`/${endPoint}/${id}`);
  return res.data;
};

export const storeProduct = async (
  endPoint: string,
  data: { product_name: string; price: number }
) => {
  const res = await axiosInstance.post(`/${endPoint}`, data);
  return res.data;
};

export const destroyProduct = async (endPoint: string, id: number) => {
  const res = await axiosInstance.delete(`/${endPoint}/${id}`);
  return res.data;
};

export const updateProduct = async (
  endPoint: string,
  updateId: number,
  data: { product_name: string; price: number }
) => {
  const res = await axiosInstance.put<Products>(
    `/${endPoint}/${updateId}`,
    data
  );
  return res.data;
};
