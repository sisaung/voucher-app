import ProductForm from "./ProductForm";
import useCreateProduct from "../hooks/useCreateProduct";

const CreateProductForm = () => {
  const { control, handleSubmit, isPending, handleCreateProduct } =
    useCreateProduct();

  return (
    <section className="mt-10">
      <h1 className="mb-5 text-xl font-bold text-gray-800 md:text-2xl">
        Create Your New Product
      </h1>
      <ProductForm
        control={control}
        isPending={isPending}
        updateCheck={false}
        handleProduct={handleSubmit(handleCreateProduct)}
      />
    </section>
  );
};

export default CreateProductForm;
