import { useMutation } from "@tanstack/react-query";
import { createAuth } from "../../../services/api";

const useAuth = (endPoint: string) => {
  return useMutation({
    mutationFn: (data: any) => createAuth(endPoint, data),
  });
};
export default useAuth;
