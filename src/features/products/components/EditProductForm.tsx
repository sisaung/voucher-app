import { useForm } from "react-hook-form";
import ProductForm from "./ProductForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductSchemaForm } from "../../../types/product";
import useUpdateProduct from "../hooks/useUpdateProduct";
import { useNavigate, useParams } from "react-router-dom";
import useSingleShowProduct from "../hooks/useSingleShowProduct";
import { memo } from "react";
import toast from "react-hot-toast";

const EditProductForm = memo(() => {
  const { id } = useParams();

  const { reset } = useForm<ProductSchemaForm>({
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
        if (data.redirect_to_product) {
          navigate("/dashboard/products");
        }
      },
    });
    reset();
  };

  return (
    <section className="mt-8">
      <h1 className="text-xl md:text-2xl font-bold mb-10"> Edit Product </h1>
      <ProductForm
        defaultValue={data?.data}
        isPending={isPending}
        handleProduct={handleUpdateProduct}
      />
    </section>
  );
});

export default EditProductForm;
