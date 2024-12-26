import { useMutation, useQueryClient } from "@tanstack/react-query";
import { destroyProduct } from "../../../services/productApi";
import { Products } from "../../../types/product";
import toast from "react-hot-toast";

const useDestroyProduct = (endPoint: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | undefined) => destroyProduct(endPoint, id ?? 1),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });
      const previousProducts = queryClient
        .getQueriesData<Products>({ queryKey: ["products"] })
        .map(([_, data]) => data);

      queryClient.setQueriesData(
        { queryKey: ["products"] },
        (old: Products | undefined) => {
          if (!old) return old;

          return {
            ...old,
            data: old.data.filter((product) => product.id !== id),
          };
        }
      );

      toast.success("Product deleted successfully");

      return { previousProducts };
    },
    onError: (_error, _id, context) => {
      queryClient.setQueriesData(
        { queryKey: ["product"] },
        context?.previousProducts
      );

      toast.error("An unknown error occurred");
    },
    onSuccess: () => {},
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useDestroyProduct;
