import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Links, Meta, Params } from "../../../types/product";
import useVisiblePageNumbers from "../../../hooks/useVisiblePageNumber";
import { Fragment } from "react/jsx-runtime";
import urlToParamObj from "../../../utils/urlToParamObj";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { useShallow } from "zustand/shallow";

type SaleProductPaginationProps = {
  meta: Meta;
  links: Links;
};

const SaleProductPagination = ({
  meta: { from, to, total, current_page, last_page },
  links: { next, prev },
}: SaleProductPaginationProps) => {
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

  return (
    <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between mt-5 sm:gap-0 gap-3 ">
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
