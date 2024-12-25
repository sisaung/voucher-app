import { LuSearch, LuX } from "react-icons/lu";
import useSaleProductListHeader from "../hooks/useSaleProductListHeader";

const SaleProductListHeader = () => {
 
  const  { handleSearchInput,handleClearSearch,searchInputRef } = useSaleProductListHeader()
  

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
