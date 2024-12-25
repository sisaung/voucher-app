import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../services/productApi";
import paramsToObj from "../../../utils/paramsToObj";
import { Params } from "../../../types/product";

const useFetchProduct = (endPoint: string, params: Params | string) => {
  const currentParamsObj = paramsToObj(params);

  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(endPoint, params),
    placeholderData: (previousData, previousQuery) => {
      if (!previousData || !previousQuery) return undefined;

      const previousParams = previousQuery.queryKey[1];
      const previousParamsObj = paramsToObj(previousParams);

      const isOnlyPageChange = previousParamsObj.page !== currentParamsObj.page;

      return isOnlyPageChange ? previousData : undefined;
    },
  });
};
export default useFetchProduct;
