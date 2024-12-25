import Button from "../../../components/ui/Button";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import TextInput from "../../../components/TextInput";
import RouteGuard from "./RouteGuard";
import useLoginForm from "../hooks/useLoginForm";
import useHandleApiError from "../../../hooks/useHandleApiError";
const LoginForm = () => {
  const { control, handleSubmit, handleLogin, isPending } = useLoginForm();
  useHandleApiError();

  return (
    <RouteGuard>
      <Container>
        <div className="md:px-0 px-5 flex flex-col items-center justify-center w-full h-screen">
          <h1 className="mb-5 text-2xl font-bold">Please Login Your Account</h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="max-w-md w-full px-6 py-8 space-y-4 border border-gray-200 rounded-lg shadow-md"
          >
            <TextInput
              type="email"
              label="Email"
              name="email"
              control={control}
              placeholder="Enter your email"
              disabled={isPending}
            />

            <TextInput
              type="password"
              label="Password"
              name="password"
              control={control}
              disabled={isPending}
            />

            <div className="flex gap-4 ">
              <p className="text-gray-500 text-nowrap sm:text-base text-sm">
                Don't have an account ?
              </p>
              <Link
                to="/register"
                className="sm:text-base text-sm text-blue-500 underline hover:text-blue-600"
              >
                Register
              </Link>
            </div>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isPending}
              className="sm:text-base text-sm inline-flex items-center justify-center gap-2 disabled:pointer-events-none w-full  disabled:opacity-75"
            >
              {isPending && <LoadingSpinner />}
              Login
            </Button>
          </form>
        </div>
      </Container>
    </RouteGuard>
  );
};

export default LoginForm;
