import { useLocation, useSearchParams } from "react-router-dom";
import EmptyRow from "../../../components/EmptyRow";
import Pagination from "../../../components/Pagination";
import useFetchProduct from "../hooks/useFetchProduct";
import ProductListsLoader from "./ProductListsLoader";
import ProductListsRow from "./ProductListsRow";
import { RefObject } from "react";
import SortData from "../../../components/SortData";
import LoadingEmptyHandle from "./LoadingEmptyHandle";

export type OutletContext = {
  scrollContainerRef: RefObject<HTMLDivElement>;
};

const ProductLists = () => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();

  const { data, isPending } = useFetchProduct("products", location.search);

  const limit = params.get("limit") ?? 5;

  const loaderArr = Array.from({ length: Number(limit) }, (_, i) => i + 1);

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortData name="ID" sort_by="id" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortData name="Name" sort_by="product_name" />
              </th>
              <th className="text-end px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortData name="Price" sort_by="price" align />
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
              length={data?.data?.length ?? 0}
              loaderArr={loaderArr}
            />
            {data?.data?.map((product, index) => (
              <ProductListsRow key={index} product={product} />
            ))}
          </tbody>
        </table>
      </div>

      {data?.meta && <Pagination meta={data?.meta} links={data?.links} />}
    </div>
  );
};

export default ProductLists;
