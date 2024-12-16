import { create } from "zustand";

type MutateId = {
  deletedProductId: number | null;
  setDeletedProductId: (id: number) => void;
};

const useMutatedIdStore = create<MutateId>()((set) => ({
  deletedProductId: null,
  setDeletedProductId: (id) => set({ deletedProductId: id }),
}));

export default useMutatedIdStore;
