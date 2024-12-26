import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import useCookie from "react-use-cookie";
import { axiosInstance } from "../services/axiosInstance";

const useHandleApiError = () => {
  const [_token, _setToken, removeToken] = useCookie("my_token");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          removeToken();
          queryClient.clear();
          navigate("/");
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
