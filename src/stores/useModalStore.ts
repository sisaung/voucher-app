import { create } from "zustand";

type Modal = {
  openProductDeletedModal: boolean;
  openVoucherDeletedModal: boolean;
  openInvoiceDownloadTypeModal: boolean;
  setOpenProductDeletedModal: (open: boolean) => void;
  setOpenVoucherDeletedModal: (open: boolean) => void;
  setOpenInvoiceDownloadTypeModal: (open: boolean) => void;
};

const useModalStore = create<Modal>()((set) => ({
  openProductDeletedModal: false,
  openVoucherDeletedModal: false,
  openInvoiceDownloadTypeModal: false,
  setOpenProductDeletedModal: (open) => set({ openProductDeletedModal: open }),
  setOpenVoucherDeletedModal: (open) => set({ openVoucherDeletedModal: open }),
  setOpenInvoiceDownloadTypeModal: (open) =>
    set({ openInvoiceDownloadTypeModal: open }),
}));

export default useModalStore;
