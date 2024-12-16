import ProductPage from "../features/products/pages/ProductPage";
import CreateProductPage from "../features/products/pages/CreateProductPage";
import EditProductPage from "../features/products/pages/EditProductPage";

const productRoute = [
  {
    path: "products",
    element: <ProductPage />,
  },
  {
    path: "products/create",
    element: <CreateProductPage />,
  },
  {
    path:"products/edit/:id",
    element:<EditProductPage />
  }
];
export default productRoute;
