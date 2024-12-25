import { useQuery } from "@tanstack/react-query";
import { fetchVouchers } from "../../../services/voucherApi";
import paramsToObj from "../../../utils/paramsToObj";
import { Params } from "../../../types/product";

const useFetchVoucher = (endPoint: string, params: Params | string) => {
  const currentParamsObj = paramsToObj(params);

  return useQuery({
    queryKey: ["vouchers", params],
    queryFn: () => fetchVouchers(endPoint, params),
    placeholderData: (previousData, previousQuery) => {
      if (!previousData || !previousQuery) return;

      const previousParams = previousQuery.queryKey[1];

      const previousParamsObj = paramsToObj(previousParams);

      const isOnlyPageChange = previousParamsObj.page !== currentParamsObj.page;

      return isOnlyPageChange ? previousData : undefined;
    },
  });
};

export default useFetchVoucher;
