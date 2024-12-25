import { LuChevronDown, LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { Fragment } from "react";

import { Meta, Links } from "../types/product";
import usePagination from "../hooks/usePagination";

type PaginationProps = {
  meta: Meta;
  links: Links;
};

const Pagination = ({
  meta: { from, to, current_page, last_page, total },
  links: { prev, next },
}: PaginationProps) => {
  const {
    rowsPerPage,
    rowsPerPageValue,
    handleRowsPerPage,
    handlePreviousBtn,
    handleNextBtn,
    specificPages,
    handleSpecificPageClick,
  } = usePagination(prev, next, from, to, current_page, last_page);

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
                            ? "ml-2 bg-emerald-400 text-white "
                            : ""
                        } px-2.5 py-0.5 border-gray-600  `}
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
