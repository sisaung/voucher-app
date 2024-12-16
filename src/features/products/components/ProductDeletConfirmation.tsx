import { useShallow } from "zustand/shallow";
import useModalStore from "../../../stores/useModalStore";
import { LuTriangleAlert } from "react-icons/lu";
import useDestroyProduct from "../hooks/useDestroyProduct";
import useMutatedIdStore from "../../../stores/useMutatedIdStore";
import { motion } from "motion/react";
import { useEffect } from "react";

const ProductDeletConfirmation = () => {
  const { mutate } = useDestroyProduct("products");
  const { openDeletedModal, setOpenDeletedModal } = useModalStore(
    useShallow((state) => ({
      openDeletedModal: state.openDeletedModal,
      setOpenDeletedModal: state.setOpenDeletedModal,
    }))
  );

  const { deletedProductId } = useMutatedIdStore(
    useShallow((state) => ({ deletedProductId: state.deletedProductId }))
  );

  const handleDeleteBtn = () => {
    mutate(deletedProductId ?? 0);
    setOpenDeletedModal(false);
  };

  const handleCancelBtn = () => {
    setOpenDeletedModal(false);
  };

  const handleOverLay = () => {
    setOpenDeletedModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDeletedModal(false);
      }
    };

    if (openDeletedModal) {
      document.addEventListener("keydown", handleKeyDown);

      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [openDeletedModal]);

  return (
    <>
      {openDeletedModal && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.2, damping: 17 }}
          onClick={handleOverLay}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex justify-center items-center size-10 rounded-full bg-red-100">
                <LuTriangleAlert className="text-red-500" />
              </div>
              <h2 className="text-lg font-medium ">Delete Product</h2>
            </div>
            <p className="mb-6 text-sm text-gray-500">
              Are you sure you want to delete this item? This action cannot be
              undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelBtn}
                className="text-sm px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteBtn}
                className="text-sm px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProductDeletConfirmation;
