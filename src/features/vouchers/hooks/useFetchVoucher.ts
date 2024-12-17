import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchVouchers } from "../../../services/voucherApi";
import paramsToObj from "../../../utils/paramsToObj";

const useFetchVoucher = (endPoint: string, param: any) => {
  const currentParamsObj = paramsToObj(param);

  return useQuery({
    queryKey: ["vouchers", param],
    queryFn: () => fetchVouchers(endPoint, param),
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
