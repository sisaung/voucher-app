import { useNavigate, useParams } from "react-router-dom";
import { productSchema, ProductSchemaForm } from "../../../types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import useSingleShowProduct from "./useSingleShowProduct";
import useUpdateProduct from "./useUpdateProduct";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const useEditProduct = () => {
  const { id } = useParams();

  const { control, reset, handleSubmit } = useForm<ProductSchemaForm>({
    resolver: zodResolver(productSchema),
  });

  const { data } = useSingleShowProduct("products", Number(id));
  const { mutate, isPending } = useUpdateProduct("products", Number(id));
  const navigate = useNavigate();

  const handleUpdateProduct = (data: ProductSchemaForm) => {
    const newData = {
      product_name: data.name,
      price: Number(data.price),
    };

    mutate(newData, {
      onSuccess: () => {
        toast.success("Product updated successfully");
        reset();
        if (data.redirect_to_product) {
          navigate("/dashboard/products");
        }
      },
    });
  };

  return { control, handleSubmit, isPending, handleUpdateProduct, data };
};

export default useEditProduct;
