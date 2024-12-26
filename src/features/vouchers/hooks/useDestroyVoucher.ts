import { useMutation, useQueryClient } from "@tanstack/react-query";
import { destroyVoucher } from "../../../services/voucherApi";
import { VoucherData } from "../../../types/voucher";
import toast from "react-hot-toast";

const useDestroyVoucher = (endPoint: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => destroyVoucher(endPoint, id),
    onMutate: (id) => {
      queryClient.cancelQueries({ queryKey: ["vouchers"] });

      const previousData = queryClient
        .getQueriesData({ queryKey: ["vouchers"] })
        .map(([_, data]) => data);

      queryClient.setQueriesData(
        { queryKey: ["vouchers"] },
        (old: VoucherData | undefined) => {
          if (!old) return;

          return {
            ...old,
            data: old.data.filter((voucher) => Number(voucher.id) !== id),
          };
        }
      );

      toast.success("Voucher Deleted Successfully");

      return { previousData };
    },
    onError: (error, _id, context) => {
      queryClient.setQueriesData(
        { queryKey: ["vouchers"] },
        context?.previousData
      );
      toast.error(error.message ?? "An unknown error occurred");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
    },
  });
};

export default useDestroyVoucher;
