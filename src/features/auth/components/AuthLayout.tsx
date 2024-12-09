import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
