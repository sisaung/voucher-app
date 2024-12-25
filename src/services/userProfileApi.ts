import {
  EditProfile,
  UserChangePasswordSchemaForm,
} from "../types/userEditProfile";
import { axiosInstance } from "./axiosInstance";

export const updateProfileName = async (
  endPoint: string,
  data: { name: string } | { profile_image: string }
) => {
  const res = await axiosInstance.post<EditProfile>(`/${endPoint}`, data);
  return res.data;
};

export const updateProfileImage = async (endPoint: string, data: FormData) => {
  const res = await axiosInstance.post<EditProfile>(`/${endPoint}`, data);
  return res.data;
};

export const updatePassword = async (
  endPoint: string,
  data: UserChangePasswordSchemaForm
) => {
  const res = await axiosInstance.post(`/${endPoint}`, data);
  return res.data;
};
