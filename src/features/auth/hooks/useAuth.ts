import { useMutation } from "@tanstack/react-query";
import { storeAuth } from "../../../services/productApi";

const useAuth = (endPoint: string) => {
  return useMutation({
    mutationFn: (data: any) => storeAuth(endPoint, data),
  });
};
export default useAuth;
