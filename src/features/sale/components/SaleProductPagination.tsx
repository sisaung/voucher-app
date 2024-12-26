import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Links, Meta } from "../../../types/product";
import { Fragment } from "react/jsx-runtime";
import useSaleProductPagination from "../hooks/useSaleProductPagination";

type SaleProductPaginationProps = {
  meta: Meta;
  links: Links;
};

const SaleProductPagination = ({
  meta: { from, to, total, current_page, last_page },
  links: { next, prev },
}: SaleProductPaginationProps) => {
  const {
    specificPages,
    handleSpecificPageClick,
    handlePreviousBtn,
    handleNextBtn,
  } = useSaleProductPagination(prev, next, current_page, last_page);

  return (
    <div className="flex flex-col items-start justify-between gap-3 mt-5 sm:flex-row sm:items-center sm:gap-0 ">
      <div>
        <p className="text-sm ">
          Showing <b> {from} </b> to <b> {to} </b> of <b> {total} </b> entries
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
                        ? "ml-2 bg-green-400 text-white"
                        : ""
                    } px-2.5 py-0.5 border-gray-600 `}
                    onClick={handleSpecificPageClick.bind(null, page as string)}
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
  );
};

export default SaleProductPagination;
