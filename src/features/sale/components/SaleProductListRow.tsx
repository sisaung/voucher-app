import { useShallow } from "zustand/shallow";
import Button from "../../../components/ui/Button";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { Product } from "../../../types/product";
import { formatDate, formatTime } from "../../../utils/formatDateTime";
import useSingleShowProduct from "../../products/hooks/useSingleShowProduct";

type SaleProductListRowProps = {
  product: Product;
};
const SaleProductListRow = ({ product }: SaleProductListRowProps) => {
  const { data } = useSingleShowProduct("products", product.id ?? 0);

  const { setOpenModal, setSelectedSaleProduct } = useSaleProductStore(
    useShallow((state) => ({
      setOpenModal: state.setOpenModal,
      setSelectedSaleProduct: state.setSelectedSaleProduct,
    }))
  );

  const handleSaleProductSelect = () => {
    setSelectedSaleProduct(data?.data as Product);
    setOpenModal(false);
  };

  return (
    <>
      <tr>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {product.id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
          {product.product_name}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 text-end whitespace-nowrap">
          ${product.price}
        </td>
        <td className="px-6 py-4 text-xs text-gray-500 text-end whitespace-nowrap">
          <div className="flex flex-col">
            <p> {formatDate(product.created_at)} </p>
            <p>{formatTime(product.created_at)}</p>
          </div>
        </td>
        <td className="px-6 py-4 text-xs text-gray-500 text-end whitespace-nowrap">
          <div className="flex flex-col">
            <p> {formatDate(product.updated_at)} </p>
            <p>{formatTime(product.updated_at)}</p>
          </div>
        </td>
        <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
          <Button onClick={handleSaleProductSelect}> Select </Button>
        </td>
      </tr>
    </>
  );
};

export default SaleProductListRow;
