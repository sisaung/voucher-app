import ProductForm from "./ProductForm";
import { memo } from "react";
import useEditProduct from "../hooks/useEditProduct";

const EditProductForm = memo(() => {
  const { control, handleSubmit, isPending, handleUpdateProduct, data } =
    useEditProduct();

  return (
    <section className="mt-8">
      <h1 className="mb-10 text-xl font-bold md:text-2xl"> Edit Product </h1>
      <ProductForm
        defaultValue={data?.data}
        control={control}
        isPending={isPending}
        updateCheck
        handleProduct={handleSubmit(handleUpdateProduct)}
      />
    </section>
  );
});

export default EditProductForm;
