import Button from "../../../components/ui/Button";
import Container from "../../../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema, registerSchema } from "../../../types/auth";
import LoadingSpinner from "../../../components/LoadingSpinner";
import TextInput from "../../../components/TextInput";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import RouteGuard from "./RouteGuard";

const RegisterForm = () => {
  const { control, handleSubmit, reset } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending, error } = useAuth("register");
  const navigate = useNavigate();

  const handleRegister = (data: RegisterFormSchema) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Registration successfully");
        navigate("/");
      },
      onError: () => {
        toast.error(
          error?.message ?? "An unknown error occurred registration failed "
        );
      },
    });

    reset();
  };

  return (
    <RouteGuard>
      <Container>
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <h1 className="mb-5 text-2xl font-bold">Please Login Your Account</h1>
          <form
            className="border w-1/3 border-gray-200 shadow-sm rounded-lg px-6 py-8 space-y-4"
            onSubmit={handleSubmit(handleRegister)}
          >
            <TextInput
              type="text"
              name="name"
              label="Name"
              control={control}
              placeholder="Enter your name"
            />
            <TextInput
              type="email"
              name="email"
              label="Email"
              control={control}
              placeholder="Enter your Email"
            />
            <TextInput
              type="password"
              name="password"
              label="Password"
              control={control}
            />

            <TextInput
              type="password"
              name="password_confirmation"
              label="Confirm Password"
              control={control}
            />
            <div className="flex gap-4 ">
              <p className="text-gray-500"> Already have an account ? </p>
              <Link
                to="/"
                className="hover:text-blue-600 text-blue-500 underline"
              >
                Login
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
              Register
            </Button>
          </form>
        </div>
      </Container>
    </RouteGuard>
  );
};

export default RegisterForm;
