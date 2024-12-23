import useCookie from "react-use-cookie";
import { useForm } from "react-hook-form";
import { LoginFormSchema, loginSchema } from "../../../types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLoginForm = () => {
  const {
    control,

    handleSubmit,
    reset,
  } = useForm<LoginFormSchema>({ resolver: zodResolver(loginSchema) });

  const { mutate, isPending, error } = useAuth("login");
  const [token, setToken] = useCookie("my_token");
  const [user, setUser] = useCookie("user");

  const navigate = useNavigate();

  const handleLogin = (formData: LoginFormSchema) => {
    mutate(formData, {
      onSuccess: (data) => {
        setToken(data.token);
        setUser(JSON.stringify(data.user));
        toast.success("Welcome,Login Successfully");
        navigate("/dashboard");
      },
      onError: () => {
        toast.error(error?.message ?? "An unknown error occurred");
      },
    });

    reset();
  };

  return { control, handleSubmit, handleLogin, isPending };
};

export default useLoginForm;
