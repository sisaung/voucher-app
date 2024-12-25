import { useShallow } from "zustand/shallow";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { SortData } from "../../../components/SortData";
import { Params } from "../../../types/product";

const useSortSaleProductList = () => {
  const { params, setParams } = useSaleProductStore(
    useShallow((state) => ({
      params: state.params,
      setParams: state.setParams,
    }))
  );

  const handleIncrementBtn = (sortData: SortData) => {
    setParams({
      ...params,
      sort_by: sortData.sort_by,
      sort_direction: sortData.sort_direction,
    } as Params);
  };

  const handleDecrementBtn = (sortData: SortData) => {
    setParams({
      ...params,
      sort_by: sortData.sort_by,
      sort_direction: sortData.sort_direction,
    } as Params);
  };

  return { handleIncrementBtn, handleDecrementBtn };
};

export default useSortSaleProductList;
