import { ChangeEvent, useState } from "react";
import useSaleRecordStore from "../../../stores/useSaleRecordStore";
import { useShallow } from "zustand/shallow";
import toast from "react-hot-toast";

const useSaleRecordTable = () => {
  const [addTax, setAddTax] = useState<boolean>(false);

  const { records, taxRate, setTaxRate } = useSaleRecordStore(
    useShallow((state) => ({
      records: state.records,
      taxRate: state.taxRate,
      setTaxRate: state.setTaxRate,
    }))
  );

  const subTotal = records.reduce((prev, record) => {
    const cost = record.quantity * record.product.price;
    return prev + cost;
  }, 0);

  const tax = (subTotal * taxRate) / 100;
  const total = subTotal + tax;

  const handleAddTax = () => {
    setAddTax(true);
    setTaxRate(5);

    if (addTax) {
      toast.error("Tax has already been added");
    }
  };

  const handleTax = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[1-9]\d*$/)) {
      setTaxRate(parseFloat(e.target.value));
    }
  };

  return {
    records,
    taxRate,
    addTax,
    tax,
    subTotal,
    total,
    handleAddTax,
    handleTax,
  };
};
export default useSaleRecordTable;
