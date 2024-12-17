import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productSchema, ProductSchemaForm } from "../../../types/product";
import useStoreProduct from "../hooks/useStoreProduct";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";

const CreateProductForm = () => {
  const { reset } = useForm<ProductSchemaForm>({
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

    console.log(data.price);

    mutate(newData, {
      onSuccess: () => {
        toast.success("Product created successfully");
        if (data.redirect_to_product) {
          navigate("/dashboard/products");
        }
      },
    });
    reset();
  };

  return (
    <section className="mt-10">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
        Create Your New Product
      </h1>
      <ProductForm isPending={isPending} handleProduct={handleCreateProduct} />
    </section>
  );
};

export default CreateProductForm;
