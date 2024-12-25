import { useShallow } from "zustand/shallow";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import useVisiblePageNumbers from "../../../hooks/useVisiblePageNumber";
import { Params } from "../../../types/product";
import urlToParamObj from "../../../utils/urlToParamObj";

const useSaleProductPagination = (
  prev: string,
  next: string,
  current_page: number,
  last_page: number
) => {
  const { params, setParams } = useSaleProductStore(
    useShallow((state) => ({
      params: state.params,
      setParams: state.setParams,
    }))
  );

  const specificPages = useVisiblePageNumbers(current_page, last_page);
  const handleSpecificPageClick = (page: string) => {
    setParams({ ...params, page: page } as Params);
  };

  const handlePreviousBtn = () => {
    const paramsObj = urlToParamObj(prev);
    setParams(paramsObj as Params);
  };
  const handleNextBtn = () => {
    const paramsObj = urlToParamObj(next);
    setParams(paramsObj as Params);
  };

  return {
    specificPages,
    handleSpecificPageClick,
    handlePreviousBtn,
    handleNextBtn,
  };
};

export default useSaleProductPagination;
