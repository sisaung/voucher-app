import SaleRecordTableList from "./SaleRecordTableList";
import SaleRecordEmptyRow from "./SaleRecordEmptyRow";
import Button from "../../../components/ui/Button";
import { LuPercent } from "react-icons/lu";

import useSaleRecordTable from "../hooks/useSaleRecordTable";

const SaleRecordTable = () => {
  const {
    records,
    taxRate,
    addTax,
    tax,
    subTotal,
    total,
    handleAddTax,
    handleTax,
  } = useSaleRecordTable();

  return (
    <div className="col-span-2">
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase "
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Product Name
              </th>
              <th
                scope="col"
                className="px-6 text-end py-3 text-xs font-medium tracking-wider text-gray-500 uppercase "
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 text-end py-3 text-xs font-medium tracking-wider text-gray-500 uppercase "
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-6 text-end py-3 text-xs font-medium tracking-wider text-gray-500 uppercase "
              >
                Cost
              </th>
              <th
                scope="col"
                className="text-center px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 ? (
              <SaleRecordEmptyRow />
            ) : (
              records.map((record, index) => (
                <SaleRecordTableList
                  key={record.product_id}
                  record={record}
                  index={index}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="pr-3 mt-5 space-y-4">
        <div className="flex items-center justify-end gap-4">
          <span className="text-sm font-medium tracking-wider text-gray-500">
            Subtotal:
          </span>
          <span className="text-lg font-semibold text-gray-800">
            ${subTotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-end gap-8">
          <div className="space-x-2">
            <Button
              onClick={handleAddTax}
              className="inline-flex items-center gap-2 text-xs "
            >
              <LuPercent /> Add Taxes
            </Button>
            {addTax && (
              <>
                <input
                  value={taxRate}
                  onChange={handleTax}
                  type="number"
                  className=" border border-gray-300 rounded ps-3 w-32 py-1.5 focus:outline-2 focus:outline-blue-500 appearance-none "
                />
                <span> % </span>
              </>
            )}
          </div>
          {addTax && (
            <div>
              <span> $ {tax.toFixed(2)} </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-4 pt-4 border-t">
          <span className="text-base font-medium tracking-wide text-gray-900">
            Total:
          </span>
          <span className="text-xl font-bold text-gray-900">
            $ {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SaleRecordTable;
