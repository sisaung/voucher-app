import { useShallow } from "zustand/shallow";
import useSaleRecordStore from "../../../stores/useSaleRecordStore";

const useSaleRecordTableLists = (product_id: number, quantity: number) => {
  const { deleteRecord, updateQuantity } = useSaleRecordStore(
    useShallow((state) => ({
      deleteRecord: state.deleteRecord,
      updateQuantity: state.updateQuantity,
    }))
  );
  const handleDeleteRecord = () => {
    deleteRecord(product_id);
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(product_id, 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) {
      deleteRecord(product_id);
    } else {
      updateQuantity(product_id, -1);
    }
  };

  return { handleDeleteRecord, handleIncreaseQuantity, handleDecreaseQuantity };
};
export default useSaleRecordTableLists;
