import { motion } from "motion/react";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { useShallow } from "zustand/shallow";
import SaleProductLIst from "./SaleProductLIst";
import SaleProductListHeader from "./SaleProductListHeader";
import Button from "../../../components/ui/Button";

const ChooseSaleProductModal = () => {
  const { openModal, setOpenModal } = useSaleProductStore(
    useShallow((state) => ({
      openModal: state.openModal,
      setOpenModal: state.setOpenModal,
    }))
  );

  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <div className="mt-5">
      {openModal && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.2, damping: 17 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="flex flex-col w-full h-[600px] px-6 py-10 xl:py-6 mx-3 bg-white rounded-lg max-w-7xl md:mx-0 relative ">
            <div className="absolute flex justify-end bottom-12 lg:static right-4 ">
              <Button
                onClick={handleCancel}
                variant="outline"
                className="text-sm "
              >
                Cancel
              </Button>
            </div>

            <SaleProductListHeader />
            <SaleProductLIst />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChooseSaleProductModal;
