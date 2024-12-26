import { useMutation, useQueryClient } from "@tanstack/react-query";

import { storeProduct } from "../../../services/productApi";
import { Products } from "../../../types/product";
import toast from "react-hot-toast";

type Product = {
  product_name: string;
  price: number;
  created_at: string;
  updated_at: string;
};

const useStoreProduct = (endPoint: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Product) => storeProduct(endPoint, data),
    onMutate: async (newData: Product) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });
      const previousProducts = queryClient
        .getQueriesData<Products>({
          queryKey: ["products"],
        })
        .map(([_, data]) => data);

      queryClient.setQueriesData(
        { queryKey: ["products"] },
        (old: Products | undefined) => {
          if (!old) {
            return;
          }

          return {
            ...old,
            data: [newData, ...old.data],
          };
        }
      );

      return { previousProducts };
    },

    onError: (error, _newData, context) => {
      queryClient.setQueriesData(
        { queryKey: ["products"] },
        context?.previousProducts
      );

      toast.error(
        error?.message 
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
export default useStoreProduct;
