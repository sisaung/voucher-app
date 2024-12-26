import { useForm } from "react-hook-form";
import { RegisterFormSchema, registerSchema } from "../../../types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useRegisterForm = () => {
  const { control, handleSubmit, reset } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending } = useAuth("register");
  const navigate = useNavigate();

  const handleRegister = (data: RegisterFormSchema) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Registration successfully");
        navigate("/");
      },
      onError: (error) => {
        toast.error(error?.message);
      },
    });

    reset();
  };

  return { control, handleSubmit, isPending, handleRegister };
};

export default useRegisterForm;
