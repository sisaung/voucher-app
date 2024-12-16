import Breadcrumb from "../../../components/Breadcrumb";
import CreateProductForm from "../components/CreateProductForm";

const CreateProductPage = () => {
  return (
    <div className="mt-6 px-5">
      <Breadcrumb
        currentTitle="Create Product"
        links={[{ name: "Products", path: "/dashboard/products" }]}
      />
      <CreateProductForm />
    </div>
  );
};
export default CreateProductPage;
