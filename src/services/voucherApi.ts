import { Params } from "../types/product";
import { VoucherData, VoucherDetail } from "../types/voucher";
import { axiosInstance } from "./axiosInstance";

export const fetchVouchers = async (
  endPoint: string,
  param: Params | string
) => {
  const res = await axiosInstance.get<VoucherData>(`/${endPoint}${param}`);
  return res.data;
};

export const destroyVoucher = async (endPoint: string, id: number) => {
  const res = await axiosInstance.delete(`/${endPoint}/${id}`);
  return res.data;
};

export const showVoucher = async (endPoint: string, voucherId: number) => {
  const res = await axiosInstance.get<VoucherDetail>(
    `/${endPoint}/${voucherId}`
  );
  return res.data;
};

export const storeVoucher = async (endPoint: string, params: Params) => {
  const res = await axiosInstance.post(`/${endPoint}`, params);
  return res.data;
};
