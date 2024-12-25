import { useForm } from "react-hook-form";
import { productSchema, ProductSchemaForm } from "../../../types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import useStoreProduct from "./useStoreProduct";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useCreateProduct = () => {
  const { control, reset, handleSubmit } = useForm<ProductSchemaForm>({
    resolver: zodResolver(productSchema),
  });

  const { mutate, isPending } = useStoreProduct("products");
  const navigate = useNavigate();

  const handleCreateProduct = (data: ProductSchemaForm) => {
    const newData = {
      product_name: data.name,
      price: Number(data.price),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    mutate(newData, {
      onSuccess: () => {
        toast.success("Product created successfully");
        reset();

        if (data.redirect_to_product) {
          navigate("/dashboard/products");
        }
      },
    });
  };

  return { control, handleSubmit, isPending, handleCreateProduct };
};

export default useCreateProduct;
