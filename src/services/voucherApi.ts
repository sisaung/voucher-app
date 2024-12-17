import { VoucherData, VoucherDetail } from "../types/voucher";
import { axiosInstance } from "./axiosInstance";

export const fetchVouchers = async (endPoint: string, param: any) => {
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
