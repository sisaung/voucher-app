import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useCookie from "react-use-cookie";

type RouteGuardProps = {
  children: ReactNode;
};

const RouteGuard = ({ children }: RouteGuardProps) => {
  const [token, setToken] = useCookie("my_token");

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};

export default RouteGuard;
