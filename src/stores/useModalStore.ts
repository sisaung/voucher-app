import { create } from "zustand";

type Modal = {
  openDeletedModal: boolean;
  setOpenDeletedModal: (open: boolean) => void;
};

const useModalStore = create<Modal>()((set) => ({
  openDeletedModal: false,
  setOpenDeletedModal: (open) => set({ openDeletedModal: open }),
}));

export default useModalStore;
