import AuthLayout from "../features/auth/components/AuthLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import Register from "../features/auth/pages/Register";

const authRoute = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];
export default authRoute;
