import TextInput from "../../../components/TextInput";
import { Product, ProductSchemaForm } from "../../../types/product";
import Button from "../../../components/ui/Button";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Control } from "react-hook-form";
import { FormEvent } from "react";

type ProductFormProps = {
  handleProduct: (e: FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
  control: Control<ProductSchemaForm>;
  defaultValue?: Product | undefined;
  updateCheck?: boolean;
};

const ProductForm = ({
  isPending,
  control,
  handleProduct,
  defaultValue,
  updateCheck,
}: ProductFormProps) => {
  return (
    <form onSubmit={handleProduct} className="max-w-md">
      <div className="flex flex-col gap-4">
        <TextInput
          control={control}
          type="text"
          name="name"
          placeholder="Enter your name"
          label="Name"
          defaultValue={defaultValue?.product_name}
          disabled={isPending}
        />
        <TextInput
          control={control}
          type="number"
          name="price"
          step="any"
          placeholder="Enter your price"
          label="Price"
          defaultValue={defaultValue?.price}
          disabled={isPending}
        />

        <TextInput
          control={control}
          name="correct_product"
          label="make sure your product"
          type="checkbox"
          disabled={isPending}
          defaultChecked={defaultValue ? true : false}
          check
        />
        <TextInput
          control={control}
          name="redirect_to_product"
          label="back your product list"
          type="checkbox"
          disabled={isPending}
          check
          updateCheck={updateCheck}
        />

        <Button
          type="submit"
          className="inline-flex justify-center gap-3 py-2 disabled:opacity-80 disabled:pointer-events-none"
          disabled={isPending}
        >
          {isPending && <LoadingSpinner />}
          {defaultValue ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
