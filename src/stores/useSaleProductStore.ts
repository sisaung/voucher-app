import { create } from "zustand";
import { Product } from "../types/product";

export type Params = {
  sort_by: string;
  sort_direction: string;
  page: string;
  limit: string;
  q?: string;
};

type SaleProduct = {
  openModal: boolean;
  params: Params | null;
  selectedSaleProduct: Product | null;
  setParams: (param: Params) => void;
  setOpenModal: (open: boolean) => void;
  setSelectedSaleProduct: (selectedProduct: Product | null) => void;
};

const useSaleProductStore = create<SaleProduct>()((set) => ({
  openModal: false,
  params: null,
  selectedSaleProduct: null,
  setOpenModal: (open) => set({ openModal: open }),
  setParams: (param) => set({ params: param }),
  setSelectedSaleProduct: (selectedProduct) =>
    set({ selectedSaleProduct: selectedProduct }),
}));

export default useSaleProductStore;
