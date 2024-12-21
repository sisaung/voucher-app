import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeVoucher } from "../../../services/voucherApi";

const useStoreVoucher = (endPoint: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => storeVoucher(endPoint, data),

    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
    },
  });
};

export default useStoreVoucher;
