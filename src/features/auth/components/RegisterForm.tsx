import Button from "../../../components/ui/Button";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import TextInput from "../../../components/TextInput";
import RouteGuard from "./RouteGuard";
import useRegisterForm from "../hooks/useRegisterForm";

const RegisterForm = () => {
  const { control, handleSubmit, isPending, handleRegister } =
    useRegisterForm();

  return (
    <RouteGuard>
      <Container>
        <div className="md:px-0 px-5 flex flex-col justify-center items-center w-full h-screen">
          <h1 className=" max-[320px]:text-base mb-5 text-xl md:text-2xl font-bold mt-5">
            Please Register Your Account
          </h1>
          <form
            className="border w-full max-w-md border-gray-200 shadow-md rounded-lg px-6 py-8 space-y-4"
            onSubmit={handleSubmit(handleRegister)}
          >
            <TextInput
              type="text"
              name="name"
              label="Name"
              control={control}
              placeholder="Enter your name"
              disabled={isPending}
            />
            <TextInput
              type="email"
              name="email"
              label="Email"
              control={control}
              placeholder="Enter your Email"
              disabled={isPending}
            />
            <TextInput
              type="password"
              name="password"
              label="Password"
              control={control}
              disabled={isPending}
            />

            <TextInput
              type="password"
              name="password_confirmation"
              label="Confirm Password"
              control={control}
              disabled={isPending}
            />
            <div className="flex gap-4 ">
              <p className="text-gray-500 sm:text-base text-sm text-nowrap ">
                Already have an account ?
              </p>
              <Link
                to="/"
                className="sm:text-base text-sm hover:text-blue-600 text-blue-500 underline"
              >
                Login
              </Link>
            </div>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isPending}
              className=" w-full disabled:pointer-events-none disabled:opacity-75 inline-flex gap-2 items-center justify-center "
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
