import { VoucherRecords } from "../../../types/voucher";

type VoucherDetailTableItemsProps = {
  record: VoucherRecords;
  index: number;
};

const VoucherDetailTableItems = ({
  record: { quantity, cost, product },
  index,
}: VoucherDetailTableItemsProps) => {
  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {index + 1}
        </td>
        <td className="text-left px-3 py-4 whitespace-nowrap text-sm text-gray-900">
          {product.product_name}
        </td>
        <td className="text-end px-3 py-4 whitespace-nowrap text-sm text-gray-500">
          {quantity}
        </td>
        <td className="text-end px-3 py-4 whitespace-nowrap text-sm text-gray-500">
          $ {product.price}
        </td>
        <td className="text-end px-3 py-4 whitespace-nowrap text-sm text-gray-500">
          $ {cost}
        </td>
      </tr>
    </>
  );
};

export default VoucherDetailTableItems;
