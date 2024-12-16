import Breadcrumb from "../../../components/Breadcrumb";
import Header from "../components/Header";
import ProductLists from "../components/ProductLists";

const ProductPage = () => {
  return (
    <div className="px-5 mt-6">
      <Breadcrumb currentTitle="Products" />
      <Header />
      <ProductLists />
    </div>
  );
};

export default ProductPage;
