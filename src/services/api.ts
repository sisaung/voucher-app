import { AuthData, LoginFormSchema, RegisterFormSchema } from "../types/auth";
import { Params, Products, ShowProduct } from "../types/product";
import { axiosInstance } from "./axiosInstance";

export const storeAuth = async (
  endPoint: string,
  data: RegisterFormSchema | LoginFormSchema
) => {
  const res = await axiosInstance.post<AuthData>(`/${endPoint}`, data);
  return res.data;
};

export const fetchProducts = async (endPoint: string, params: Params | string) => {
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
