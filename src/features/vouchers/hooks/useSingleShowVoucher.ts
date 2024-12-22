import { useQuery, useQueryClient } from "@tanstack/react-query";
import { showVoucher } from "../../../services/voucherApi";
import { VoucherDetail } from "../../../types/voucher";

const singleShowVoucher = (endPoint: string, voucherId: number) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["single-voucher", voucherId],
    queryFn: () => showVoucher(endPoint, voucherId),

    initialData: () => {
      queryClient.cancelQueries({ queryKey: ["vouchers"] });
      const previousData = queryClient
        .getQueriesData<VoucherDetail>({ queryKey: ["vouchers"] })
        .map(([_, data]) => data);

      const allVouchers = previousData.flatMap((data) => data?.data || []);

      const voucher = allVouchers.find(
        (voucher) => Number(voucher.id) === voucherId
      );

      return voucher ? { data: voucher } : undefined;
    },
  });
};

export default singleShowVoucher;
