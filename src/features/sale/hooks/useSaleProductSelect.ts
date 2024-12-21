import { useShallow } from "zustand/shallow";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import useSaleRecordStore from "../../../stores/useSaleRecordStore";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Product } from "../../../types/product";

const useSaleProductSelect = () => {
  const { setOpenModal, selectedSaleProduct } = useSaleProductStore(
    useShallow((state) => ({
      selectedSaleProduct: state.selectedSaleProduct,
      setOpenModal: state.setOpenModal,
    }))
  );

  const { records, addRecord, updateQuantity } = useSaleRecordStore(
    useShallow((state) => ({
      records: state.records,
      addRecord: state.addRecord,
      updateQuantity: state.updateQuantity,
    }))
  );

  const [quantity, setQuantity] = useState(1);
  const chooseProductRef = useRef<HTMLInputElement | null>(null);

  const handleChooseSaleProduct = () => {
    setOpenModal(true);
  };

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[1-9]\d*$/)) {
      setQuantity(Number(e.target.value));
    }
  };

  const isExistingSaleProduct = records.find(
    (record) => record.product_id === selectedSaleProduct?.id
  );

  const handleAddProducts = () => {
    const newSaleRecord = {
      product_id: selectedSaleProduct?.id ?? 0,
      product: selectedSaleProduct as Product,
      quantity: quantity,
      cost: quantity * (selectedSaleProduct?.price ?? 1),
      created_at: new Date().toISOString(),
    };
    if (isExistingSaleProduct) {
      updateQuantity(isExistingSaleProduct.product_id, quantity);
    } else {
      addRecord(newSaleRecord);
    }
  };

  useEffect(() => {
    if (selectedSaleProduct && chooseProductRef.current) {
      chooseProductRef.current.value = selectedSaleProduct?.product_name;
    }
  }, [selectedSaleProduct]);

  return {
    chooseProductRef,
    selectedSaleProduct,
    quantity,
    handleChooseSaleProduct,
    handleChangeQuantity,
    handleAddProducts,
  };
};

export default useSaleProductSelect;
