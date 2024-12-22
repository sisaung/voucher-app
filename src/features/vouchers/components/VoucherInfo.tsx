import { useParams } from "react-router-dom";
import useSingleShowVoucher from "../hooks/useSingleShowVoucher";
import { formatDate } from "../../../utils/formatDateTime";
import VoucherDetailTableItems from "./VoucherDetailTableItems";
import VoucherDetailLoaderHandle from "./VoucherDetailLoaderHandle";
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
      className="max-w-3xl my-5 bg-white rounded-xl shadow-sm p-4 sm:p-6"
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Voucher</h1>

          {!openInvoiceDownloadTypeModal && (
            <Button
              onClick={handleDownload}
              className="print:hidden focus:outline-2 focus:outline-cyan-600  active:scale-75 inline-flex items-center gap-1 py-1.5 bg-cyan-500 hover:bg-cyan-600 duration-300 "
            >
              <LuDownload /> <span className="text-xs">Download</span>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Voucher Number
            </label>
            <span className="text-base font-medium">{voucher?.voucher_id}</span>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">
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
          <label className="block text-sm text-gray-500 mb-1">Bill To</label>
          <h3 className="text-base font-medium mb-1">
            {voucher?.customer_name}
          </h3>
        </div>

        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-normal text-gray-500">
                  No
                </th>
                <th className="text-left  py-3 px-4 text-sm font-normal text-gray-500">
                  Items
                </th>
                <th className="text-end py-3 px-4 text-sm font-normal text-gray-500">
                  QTY
                </th>
                <th className="text-end py-3 px-4 text-sm font-normal text-gray-500">
                  Price
                </th>
                <th className="text-end py-3 px-4 text-sm font-normal text-gray-500">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <VoucherDetailLoaderHandle isFetching={isFetching} /> */}
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

        <div className="space-y-3 sm:ml-auto sm:max-w-[200px]">
          <div className="flex justify-between text-sm text-gray-500">
            <span> Subtotal </span>
            <span>${voucher?.total}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>Tax</span>
            <span>${voucher?.tax}</span>
          </div>
          <div className="flex justify-between text-base font-semibold pt-3 border-t border-gray-200">
            <span>Total</span>
            <span>${voucher?.net_total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherInfo;
