import { ChangeEvent, useRef } from "react";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { useShallow } from "zustand/shallow";
import { debounce } from "lodash";
import { Params } from "../../../types/product";


const useSaleProductListHeader = () => {

    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const { params, setParams } = useSaleProductStore(
      useShallow((state) => ({
        params: state.params,
        setParams: state.setParams,
      }))
    );
  
    const handleSearchInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        setParams({ ...params, q: e.target.value } as Params);
      } else {
        setParams({ ...params, q: "" } as Params);
      }
    }, 500);
  
    const handleClearSearch = () => {
      if (searchInputRef?.current) {
        searchInputRef.current.value = "";
        setParams({ ...params, q: "" } as Params);
      }
    }


  return { handleSearchInput,handleClearSearch,searchInputRef };
};

export default useSaleProductListHeader;
