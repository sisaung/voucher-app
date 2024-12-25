import { ChangeEvent, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import urlToParamObj from "../utils/urlToParamObj";
import useVisiblePageNumbers from "./useVisiblePageNumber";

const usePagination = (
  prev: string,
  next: string,
  from: number,
  to: number,
  current_page: number,
  last_page: number
) => {
  const [params, setParams] = useSearchParams();
  const rowsPerPage = [3, 5, 10, 30, 50];
  const rowsPerPageValue = params.get("limit") ?? 5;
  const searchParams = useCallback(
    (url: string) => {
      const paramsObj = urlToParamObj(url);

      setParams(paramsObj);
    },
    [prev, next]
  );

  const handlePreviousBtn = () => {
    searchParams(prev);
  };

  const handleNextBtn = () => {
    searchParams(next);
  };

  const handleSpecificPageClick = useCallback(
    (page: number) => {
      const searchParams = new URLSearchParams(params);
      searchParams.set("page", page.toString());
      setParams(searchParams);
    },
    [from, to]
  );

  const specificPages = useVisiblePageNumbers(current_page, last_page);

  const handleRowsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    const searchParams = new URLSearchParams(params);
    searchParams.set("limit", e.target.value);
    setParams(searchParams);
  };

  return {
    rowsPerPage,
    rowsPerPageValue,
    handleRowsPerPage,
    handlePreviousBtn,
    handleNextBtn,
    specificPages,
    handleSpecificPageClick,
  };
};

export default usePagination;
