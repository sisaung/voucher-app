import { Record } from "../../../stores/useSaleRecordStore";
import { LuTrash2 } from "react-icons/lu";
import useSaleRecordTableLists from "../hooks/useSaleRecordTableList";

type SaleRecordTableListProps = {
  record: Record;
  index: number;
};

const SaleRecordTableList = ({
  record: { quantity, cost, product_id, product },
  index,
}: SaleRecordTableListProps) => {
  const { handleDeleteRecord, handleIncreaseQuantity, handleDecreaseQuantity } =
    useSaleRecordTableLists(product_id, quantity);

  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="px-6 py-4">{index + 1}</td>
        <td className="px-6 py-4 font-medium text-gray-900 text-sm ">
          {product.product_name}
        </td>
        <td className="px-6 py-4 text-end">${product.price}</td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2 justify-end">
            <button
              onClick={handleDecreaseQuantity}
              className="bg-blue-400  text-white size-5 rounded-full  focus:outline-none"
            >
              -
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="bg-blue-400  text-white size-5 rounded-full  focus:outline-none"
            >
              +
            </button>
          </div>
        </td>
        <td className="px-6 py-4 text-end">${cost.toFixed(2)}</td>
        <td className="px-6 py-4 text-center">
          <button
            onClick={handleDeleteRecord}
            className="text-red-500 hover:text-red-600 focus:outline-none"
          >
            <LuTrash2 className="size-4" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default SaleRecordTableList;
