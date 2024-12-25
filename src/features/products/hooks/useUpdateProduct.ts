import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../../../services/productApi";
import { Products } from "../../../types/product";

const useUpdateProduct = (endPoint: string, updateId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { product_name: string; price: number }) =>
      updateProduct(endPoint, updateId, data),

    onMutate: async (updatedProduct) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });

      const previousProducts = queryClient
        .getQueriesData<Products>({ queryKey: ["products"] })
        .map(([_, data]) => data);

      queryClient.setQueriesData(
        { queryKey: ["products"] },
        (old: Products | undefined) => {
          if (!old) return;

          return {
            ...old,
            data: old.data.map((product) =>
              product.id === updateId
                ? {
                    ...product,
                    product_name: updatedProduct.product_name,
                    price: updatedProduct.price,
                    updated_at: new Date().toISOString(),
                  }
                : product
            ),
          };
        }
      );

      return { previousProducts };
    },

    onError: (error, updatedProduct, context) => {
      queryClient.setQueryData(["products"], context?.previousProducts);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useUpdateProduct;
