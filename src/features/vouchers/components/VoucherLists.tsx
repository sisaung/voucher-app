import { useLocation, useSearchParams } from "react-router-dom";
import useFetchVoucher from "../hooks/useFetchVoucher";
import LoadingEmptyHandle from "./LoadingEmptyHandle";
import VoucherListsRow from "./VoucherListsRow";
import Pagination from "../../../components/Pagination";
import SortData from "../../../components/SortData";

const VoucherLists = () => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const { data, isPending } = useFetchVoucher("vouchers", location.search);

  const limit = params.get("limit") ?? 5;
  const loaderArr = Array.from({ length: Number(limit) }, (_, i) => i + 1);

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortData name="# ID" sort_by="id" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortData name="Customer" sort_by="customer_name" />
              </th>
              <th className="text-end px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortData name="Tax" sort_by="tax" align />
              </th>
              <th className="text-end px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortData name="Total" sort_by="total" align />
              </th>
              <th className="text-end px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="text-end px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <LoadingEmptyHandle
              isPending={isPending}
              loaderArr={loaderArr}
              length={data?.data.length ?? 0}
            />
            {data?.data?.map((voucher, index) => (
              <VoucherListsRow key={index} voucher={voucher} />
            ))}
          </tbody>
        </table>
      </div>
      {data?.meta && data?.data.length !== 0 && (
        <Pagination meta={data?.meta} links={data?.links} />
      )}
    </div>
  );
};

export default VoucherLists;
