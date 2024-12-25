import { motion } from "motion/react";
import { LuDownload } from "react-icons/lu";
import useVoucherDownloadType from "../hooks/useVoucherDownloadType";

const ChooseVoucherDownloadType = () => {

  const { openInvoiceDownloadTypeModal,handleDownloadBtn,handlePrintBtn,handleOverLay } = useVoucherDownloadType()
 

  return (
    <>
      {openInvoiceDownloadTypeModal && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.2, damping: 17 }}
          onClick={handleOverLay}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="md:mx-0 mx-3 bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex justify-center items-center size-10 rounded-full bg-cyan-500">
                <LuDownload className="text-white" />
              </div>
              <h2 className="text-lg font-medium ">Download Type</h2>
            </div>
            <p className="mb-6 text-sm text-gray-500">
              Please choose your download type.If you want to download pdf
              file,you should choose print.
            </p>
            <div className="print:hidden flex justify-end space-x-4">
              <button
                onClick={handlePrintBtn}
                className="text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Print
              </button>
              <button
                onClick={handleDownloadBtn}
                className="text-sm px-4 py-2 border border-gray-200 text-black rounded hover:bg-cyan-500 hover:text-white duration-300  focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Download Image
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ChooseVoucherDownloadType;
