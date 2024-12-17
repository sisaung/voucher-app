import { useShallow } from "zustand/shallow";
import useModalStore from "../../../stores/useModalStore";
import useDestroyProduct from "./useDestroyProduct";
import useMutatedIdStore from "../../../stores/useMutatedIdStore";
import { useEffect } from "react";

const useModalProduct = () => {
  const { mutate } = useDestroyProduct("products");
  const { openProductDeletedModal, setOpenProductDeletedModal } = useModalStore(
    useShallow((state) => ({
      openProductDeletedModal: state.openProductDeletedModal,
      setOpenProductDeletedModal: state.setOpenProductDeletedModal,
    }))
  );

  const { deletedProductId } = useMutatedIdStore(
    useShallow((state) => ({ deletedProductId: state.deletedProductId }))
  );

  const handleDeleteBtn = () => {
    mutate(deletedProductId ?? 0);
    setOpenProductDeletedModal(false);
  };

  const handleCancelBtn = () => {
    setOpenProductDeletedModal(false);
  };

  const handleOverLay = () => {
    setOpenProductDeletedModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenProductDeletedModal(false);
      }
    };

    if (openProductDeletedModal) {
      document.addEventListener("keydown", handleKeyDown);

      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [openProductDeletedModal]);

  return {
    openProductDeletedModal,
    handleDeleteBtn,
    handleCancelBtn,
    handleOverLay,
  };
};
export default useModalProduct;
