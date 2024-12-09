import Button from "../../../components/ui/Button";
import Container from "../../../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { LoginFormSchema, loginSchema } from "../../../types/auth";
import TextInput from "../../../components/TextInput";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useCookie from "react-use-cookie";
const LoginForm = () => {
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
      },
      onError: () => {
        toast.error(error?.message ?? "An unknown error occurred");
      },
    });

    reset();
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="mb-5 text-2xl font-bold"> Please Login Your Account </h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="border w-1/3 border-gray-200 shadow-sm rounded-lg px-6 py-8 space-y-4"
        >
          <TextInput
            type="email"
            label="Email"
            name="email"
            control={control}
            placeholder="Enter your email"
          />

          <TextInput
            type="password"
            label="Password"
            name="password"
            control={control}
          />

          <div className="flex gap-4 ">
            <p className="text-gray-500"> Don't have an account ? </p>
            <Link
              to="/register"
              className="hover:text-blue-600 text-blue-500 underline"
            >
              Register
            </Link>
          </div>
          <Button
            variant="primary"
            size="lg"
            type="submit"
            disabled={isPending}
            className="disabled:pointer-events-none disabled:opacity-75 inline-flex gap-2 items-center"
          >
            {isPending && <LoadingSpinner />}
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
