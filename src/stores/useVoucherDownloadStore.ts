import { RefObject } from "react";
import { create } from "zustand";

type VoucherDownloadState = {
  voucherRef: RefObject<HTMLDivElement> | null;
  setVoucherRef: (voucher: RefObject<HTMLDivElement>) => void;
};

const useVoucherDownloadStore = create<VoucherDownloadState>()((set) => ({
  voucherRef: null,
  setVoucherRef: (voucher) => set({ voucherRef: voucher }),
}));

export default useVoucherDownloadStore;
