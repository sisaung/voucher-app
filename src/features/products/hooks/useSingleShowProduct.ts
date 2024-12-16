import { useQuery, useQueryClient } from "@tanstack/react-query";
import { showProduct } from "../../../services/api";
import { Products } from "../../../types/product";

const useSingleShowProduct = (endPoint: string, id: number) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["single-product", id],
    queryFn: () => showProduct(endPoint, id),
    initialData: () => {
      // const cachedData = queryClient.getQueryData<Products>(["products"]);

      const previousProducts = queryClient
        .getQueriesData<Products>({
          queryKey: ["products"],
        })
        .map(([_, data]) => data);

      const allProducts = previousProducts.flatMap((page) => page?.data || []);

      const product = allProducts.find((p) => p.id === id);

      //change type of product {data: product} to equal return type of queryFn
      return product ? { data: product } : undefined;
    },
  });
};

export default useSingleShowProduct;
