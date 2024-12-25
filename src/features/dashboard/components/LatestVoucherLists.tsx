import LoadingEmptyHandle from "../../vouchers/components/LoadingEmptyHandle";
import VoucherListsRow from "../../vouchers/components/VoucherListsRow";
import useFetchVoucher from "../../vouchers/hooks/useFetchVoucher";

const LatestVoucherLists = () => {
  const { data, isPending } = useFetchVoucher("vouchers", "?page=1");
  const loaderArr = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <>
      <div className="p-6">
        <h1 className="text-xl font-medium mb-3"> Latest VoucherLists </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase text-end">
                  Tax
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase text-end">
                  Total
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase text-end">
                  Created
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase text-end">
                  Updated
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
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
      </div>
    </>
  );
};

export default LatestVoucherLists;
