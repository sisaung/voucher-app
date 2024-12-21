import useFetchProduct from "../../products/hooks/useFetchProduct";
import SaleProductListRow from "./SaleProductListRow";
import SaleProductPagination from "./SaleProductPagination";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { useShallow } from "zustand/shallow";
import SortSaleProductList from "./SortSaleProductList";
import LoadingEmptyHandle from "../../../components/LoadingEmptyHandle";

const SaleProductLIst = () => {
  const { params } = useSaleProductStore(
    useShallow((state) => ({ params: state.params }))
  );

  const searchParams = new URLSearchParams(params ?? "");

  const { data, isPending } = useFetchProduct(
    "products",
    `?${searchParams.toString()}`
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              <SortSaleProductList name="ID" sort_by="id" />
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              <SortSaleProductList name="Product Name" sort_by="product_name" />
            </th>
            <th className=" px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase">
              <SortSaleProductList name="Price" sort_by="price" align />
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
            length={data?.data.length ?? 0}
            loaderArr={Array.from({ length: 5 }, (_, i) => i + 1)}
          />
          {data?.data.map((product) => (
            <SaleProductListRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>

      {data?.meta && data?.data.length !== 0 && (
        <SaleProductPagination meta={data?.meta} links={data?.links} />
      )}
    </div>
  );
};

export default SaleProductLIst;
