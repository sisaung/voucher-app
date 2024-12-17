import { LuChevronDown, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
import { ChangeEvent, Fragment, useCallback } from "react";
import urlToParamObj from "../utils/urlToParamObj";
import useVisiblePageNumbers from "../hooks/useVisiblePageNumber";
import { Meta, Links } from "../types/product";

type PaginationProps = {
  meta: Meta;
  links: Links;
};

const Pagination = ({
  meta: { from, to, current_page, last_page, total },
  links: { prev, next },
}: PaginationProps) => {
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

  return (
    <section className="mt-5">
      <div className="flex xl:flex-row flex-col xl:gap-0 gap-5 justify-between items-start xl:items-center">
        <div>
          <p className="text-sm ">
            Showing <b> {from} </b> to <b> {to} </b> of <b> {total} </b> entries
          </p>
        </div>

        <div className="flex xl:flex-row flex-col items-start xl:items-center gap-5 xl:gap-10">
          <div className="flex items-center gap-3 relative">
            <p className="text-sm text-nowrap"> Rows per page </p>
            <select
              value={rowsPerPageValue}
              onChange={handleRowsPerPage}
              className="appearance-none  focus:outline-blue-500 focus:outline-4 border border-gray-300 w-20 px-3 py-0.5 rounded pe-2"
            >
              {rowsPerPage.map((row) => (
                <option key={row} value={row}>
                  {row}
                </option>
              ))}
            </select>
            <LuChevronDown className="absolute right-1.5 top-1.5 pointer-events-none " />
          </div>

          <div>
            <p className="text-sm text-nowrap">
              Page <b> {current_page} </b> of <b> {last_page} </b>
            </p>
          </div>

          <div className="flex items-center">
            <button
              disabled={!prev}
              onClick={handlePreviousBtn}
              className="active:scale-75 disabled:opacity-50 disabled:pointer-events-none "
            >
              <LuChevronLeft />
            </button>
            {specificPages.length > 1 &&
              specificPages.map((page, index) => (
                <Fragment key={index}>
                  {page === "..." ? (
                    <span className="px-2.5 py-1 border-gray-600">...</span>
                  ) : (
                    <>
                      <button
                        className={`${
                          page === current_page
                            ? "ml-2 bg-blue-600 text-white"
                            : ""
                        } px-2.5 py-0.5 border-gray-600 first:bg-gray-700 last:bg-red-500 `}
                        onClick={handleSpecificPageClick.bind(
                          null,
                          page as number
                        )}
                      >
                        {page}
                      </button>
                    </>
                  )}
                </Fragment>
              ))}

            <button
              disabled={!next}
              onClick={handleNextBtn}
              className="active:scale-75 disabled:opacity-50 disabled:pointer-events-none px-1.5"
            >
              <LuChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
