import { useShallow } from "zustand/shallow";
import useModalStore from "../../../stores/useModalStore";
import useDestroyVoucher from "./useDestroyVoucher";
import useMutatedIdStore from "../../../stores/useMutatedIdStore";
import { useEffect } from "react";

const useModalVoucher = () => {
  const { mutate } = useDestroyVoucher("vouchers");
  const { openVoucherDeletedModal, setOpenVoucherDeletedModal } = useModalStore(
    useShallow((state) => ({
      openVoucherDeletedModal: state.openVoucherDeletedModal,
      setOpenVoucherDeletedModal: state.setOpenVoucherDeletedModal,
    }))
  );

  const { deletedVoucherId } = useMutatedIdStore(
    useShallow((state) => ({ deletedVoucherId: state.deletedVoucherId }))
  );

  const handleDeleteBtn = () => {
    mutate(deletedVoucherId ?? 0);
    setOpenVoucherDeletedModal(false);
  };

  const handleCancelBtn = () => {
    setOpenVoucherDeletedModal(false);
  };

  const handleOverLay = () => {
    setOpenVoucherDeletedModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenVoucherDeletedModal(false);
      }
    };

    if (openVoucherDeletedModal) {
      document.addEventListener("keydown", handleKeyDown);

      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [openVoucherDeletedModal]);

  return {
    openVoucherDeletedModal,
    handleCancelBtn,
    handleDeleteBtn,
    handleOverLay,
  };
};
export default useModalVoucher;
