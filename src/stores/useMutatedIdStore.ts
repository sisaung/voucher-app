import { create } from "zustand";

type MutateId = {
  deletedProductId: number | null;
  deletedVoucherId: number | null;
  setDeletedProductId: (id: number) => void;
  setDeletedVoucherId: (id: number) => void;
};

const useMutatedIdStore = create<MutateId>()((set) => ({
  deletedProductId: null,
  deletedVoucherId: null,
  setDeletedProductId: (id) => set({ deletedProductId: id }),
  setDeletedVoucherId: (id) => set({ deletedVoucherId: id }),
}));

export default useMutatedIdStore;
