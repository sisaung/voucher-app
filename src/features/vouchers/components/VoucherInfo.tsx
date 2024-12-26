import { useParams } from "react-router-dom";
import useSingleShowVoucher from "../hooks/useSingleShowVoucher";
import { formatDate } from "../../../utils/formatDateTime";
import VoucherDetailTableItems from "./VoucherDetailTableItems";
import Button from "../../../components/ui/Button";
import { LuDownload } from "react-icons/lu";
import { useRef } from "react";
import useModalStore from "../../../stores/useModalStore";
import { useShallow } from "zustand/shallow";
import useVoucherDownloadStore from "../../../stores/useVoucherDownloadStore";

const VoucherInfo = () => {
  const { id } = useParams();
  const { data } = useSingleShowVoucher("vouchers", Number(id));
  const voucherDownloadRef = useRef<HTMLDivElement>(null);
  const { openInvoiceDownloadTypeModal, setOpenInvoiceDownloadTypeModal } =
    useModalStore(
      useShallow((state) => ({
        openInvoiceDownloadTypeModal: state.openInvoiceDownloadTypeModal,
        setOpenInvoiceDownloadTypeModal: state.setOpenInvoiceDownloadTypeModal,
      }))
    );
  const { setVoucherRef } = useVoucherDownloadStore(
    useShallow((state) => ({
      setVoucherRef: state.setVoucherRef,
    }))
  );
  const voucher = data?.data;

  const handleDownload = () => {
    setOpenInvoiceDownloadTypeModal(true);

    setVoucherRef(voucherDownloadRef);
  };

  return (
    <div
      ref={voucherDownloadRef}
      className="max-w-3xl p-4 my-5 bg-white shadow-sm rounded-xl sm:p-6"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Voucher</h1>

          {!openInvoiceDownloadTypeModal && (
            <Button
              onClick={handleDownload}
              className="print:hidden focus:outline-2 focus:outline-cyan-600  active:scale-75 inline-flex items-center gap-1 py-1.5 bg-cyan-500 hover:bg-cyan-600 duration-300 "
            >
              <LuDownload className="text-white" />
              <span className="text-xs text-white">Download</span>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm text-gray-500">
              Voucher Number
            </label>
            <span className="text-base font-medium">{voucher?.voucher_id}</span>
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-500">
              Sale Date
            </label>
            <span className="text-base font-medium">
              {formatDate(
                voucher?.sale_date ?? new Date().toLocaleDateString()
              )}
            </span>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-500">Bill To</label>
          <h3 className="mb-1 text-base font-medium">
            {voucher?.customer_name}
          </h3>
        </div>

        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-sm font-normal text-left text-gray-500">
                  No
                </th>
                <th className="px-4 py-3 text-sm font-normal text-left text-gray-500">
                  Items
                </th>
                <th className="px-4 py-3 text-sm font-normal text-gray-500 text-end">
                  QTY
                </th>
                <th className="px-4 py-3 text-sm font-normal text-gray-500 text-end">
                  Price
                </th>
                <th className="px-4 py-3 text-sm font-normal text-gray-500 text-end">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {voucher?.records?.map((record, index) => (
                <VoucherDetailTableItems
                  key={record.id}
                  record={record}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 sm:ml-auto me-3 sm:max-w-[200px]">
          <div className="flex justify-between text-sm text-gray-500">
            <span> Subtotal </span>
            <span>${voucher?.total}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>Tax</span>
            <span>${voucher?.tax}</span>
          </div>
          <div className="flex justify-between pt-3 text-base font-semibold border-t border-gray-200">
            <span>Total</span>
            <span>${voucher?.net_total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherInfo;
