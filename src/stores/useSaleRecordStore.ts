import { create } from "zustand";
import { Product } from "../types/product";

export type Record = {
  product_id: number;
  product: Product;
  quantity: number;
  cost: number;
  created_at: string;
};
type SaleRecord = {
  records: Record[] | [];
  taxRate: number;
  setTaxRate: (taxRate: number) => void;
  addRecord: (newRecord: Record) => void;
  deleteRecord: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  resetRecord: () => void;
};

const useSaleRecordStore = create<SaleRecord>()((set) => ({
  records: [],
  taxRate: 0,
  setTaxRate: (taxRate) => set({ taxRate }),

  addRecord: (newRecord) =>
    set((state) => ({ records: [...state.records, newRecord] })),

  deleteRecord: (id) =>
    set((state) => ({
      records: state.records.filter((record) => record.product_id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      records: state.records.map((record) => {
        if (record.product_id === id) {
          const newQuantity = record.quantity + quantity;
          const newCost = record.product.price * newQuantity;
          return { ...record, quantity: newQuantity, cost: newCost };
        } else {
          return record;
        }
      }),
    })),
  resetRecord: () => set({ records: [] }),
}));
export default useSaleRecordStore;
