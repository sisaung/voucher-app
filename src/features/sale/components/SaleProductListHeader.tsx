import { ChangeEvent, useRef } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import useSaleProductStore, {
  Params,
} from "../../../stores/useSaleProductStore";
import { useShallow } from "zustand/shallow";
import { debounce } from "lodash";

const SaleProductListHeader = () => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const { params, setParams } = useSaleProductStore(
    useShallow((state) => ({
      params: state.params,
      setParams: state.setParams,
    }))
  );

  const handleSearchInput =debounce( (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setParams({ ...params, q: e.target.value } as Params);
    } else {
      setParams({ ...params, q: "" } as Params);
    }
  },500);

  const handleClearSearch = () => {
    if (searchInputRef?.current) {
      searchInputRef.current.value = "";
      setParams({ ...params, q: "" } as Params);
    }
  };

  return (
    <div className="relative mb-3">
      <input
        type="text"
        ref={searchInputRef}
        onChange={handleSearchInput}
        className="max-[320px]:ps-5 ps-10 placeholder:text-sm rounded-lg border py-2 focus:outline-2 focus:outline-blue-500"
        placeholder="Search Product"
      />
      <LuSearch className="max-[320px]:hidden size-3.5 text-gray-500 absolute inset-0 translate-x-4 translate-y-3.5 " />
      {searchInputRef?.current?.value && (
        <button
          onClick={handleClearSearch}
          className="inline-flex items-center justify-center -translate-x-8 bg-gray-200 rounded-full size-5"
        >
          <LuX className="size-3" />
        </button>
      )}
    </div>
  );
};

export default SaleProductListHeader;
