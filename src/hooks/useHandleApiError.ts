import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import useCookie from "react-use-cookie";
import { axiosInstance } from "../services/axiosInstance";

// Axios interceptor for handling unauthorized errors
const useHandleApiError = () => {
  const [token, setToken, removeToken] = useCookie("my_token");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Token is invalid or expired
          removeToken(); // Remove token from cookies
          queryClient.clear(); // Clear React Query cache
          navigate("/login"); // Redirect to login page
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [navigate, removeToken, queryClient]);
};

export default useHandleApiError;
