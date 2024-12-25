import { useShallow } from "zustand/shallow";
import useModalStore from "../../../stores/useModalStore";
import useVoucherDownloadStore from "../../../stores/useVoucherDownloadStore";
import { useReactToPrint } from "react-to-print";
import { RefObject, useEffect } from "react";
import html2canvas from "html2canvas";

const useVoucherDownloadType = () => {
  const { openInvoiceDownloadTypeModal, setOpenInvoiceDownloadTypeModal } =
    useModalStore(
      useShallow((state) => ({
        openInvoiceDownloadTypeModal: state.openInvoiceDownloadTypeModal,
        setOpenInvoiceDownloadTypeModal: state.setOpenInvoiceDownloadTypeModal,
      }))
    );

  const { voucherRef } = useVoucherDownloadStore(
    useShallow((state) => ({ voucherRef: state.voucherRef }))
  );

  const reactToPrintFn = useReactToPrint({
    contentRef: voucherRef as RefObject<HTMLDivElement>,
    documentTitle: "Voucher Detail",
  });

  const handleDownloadBtn = async () => {
    setOpenInvoiceDownloadTypeModal(false);
    if (voucherRef?.current) {
      const canvas = await html2canvas(voucherRef?.current, {
        scale: 2,
        backgroundColor: "#ffffff",
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "voucher.png";
      link.click();
    }
  };

  const handlePrintBtn = () => {
    setOpenInvoiceDownloadTypeModal(false);
    reactToPrintFn();
  };

  const handleOverLay = () => {
    setOpenInvoiceDownloadTypeModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenInvoiceDownloadTypeModal(false);
      }
    };

    if (openInvoiceDownloadTypeModal) {
      document.addEventListener("keydown", handleKeyDown);

      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [openInvoiceDownloadTypeModal]);
  return {
    openInvoiceDownloadTypeModal,
    handleDownloadBtn,
    handlePrintBtn,
    handleOverLay,
  };
};

export default useVoucherDownloadType;
