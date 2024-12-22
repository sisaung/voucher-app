import { useForm } from "react-hook-form";
import {
  userChangePasswordSchema,
  UserChangePasswordSchemaForm,
} from "../../../types/userEditProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import useUpdatePassword from "./useUpdatePassword";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { removeCookie } from "react-use-cookie";

const useUserUpdatePassword = () => {
  const { control, handleSubmit, reset } =
    useForm<UserChangePasswordSchemaForm>({
      resolver: zodResolver(userChangePasswordSchema),
    });

  const { mutate, isPending } = useUpdatePassword(
    "user-profile/change-password"
  );

  const navigate = useNavigate();

  const handleChangePassword = (data: UserChangePasswordSchemaForm) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Password changed successfully");
        removeCookie("my_token");
        removeCookie("user");
        navigate("/");
      },
      onError: () => {
        toast.error("Please Provide correctly your old password");
      },
    });
    reset();
  };

  return { control, handleSubmit, isPending, handleChangePassword };
};

export default useUserUpdatePassword;
