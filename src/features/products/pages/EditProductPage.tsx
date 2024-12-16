import Breadcrumb from "../../../components/Breadcrumb";
import EditProductForm from "../components/EditProductForm";

const EditProductPage = () => {
  return (
    <div className="mt-6 px-5">
      <Breadcrumb
        currentTitle="Edit Product"
        links={[{ name: "Products", path: "/dashboard/products" }]}
      />
      <EditProductForm />
    </div>
  );
};

export default EditProductPage;
