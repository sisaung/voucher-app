import { useForm } from "react-hook-form";
import TextInput from "../../../components/TextInput";
import {
  Product,
  productSchema,
  ProductSchemaForm,
} from "../../../types/product";
import Button from "../../../components/ui/Button";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { zodResolver } from "@hookform/resolvers/zod";

type ProductFormProps = {
  handleProduct: (data: ProductSchemaForm) => void;
  isPending: boolean;
  defaultValue?: Product | undefined;
};

const ProductForm = ({
  isPending,
  handleProduct,
  defaultValue,
}: ProductFormProps) => {
  const { control, handleSubmit } = useForm<ProductSchemaForm>({
    resolver: zodResolver(productSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleProduct)} className="max-w-md">
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
        />

        <Button
          type="submit"
          className="py-2 disabled:opacity-80 inline-flex justify-center gap-3 disabled:pointer-events-none"
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
