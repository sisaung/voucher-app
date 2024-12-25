import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import useSortSaleProductList from "../hooks/useSortSaleProductList";

type SortDataProps = {
  name: string;
  sort_by: string;
  align?: boolean;
};

const SortSaleProductList = ({ name, sort_by, align }: SortDataProps) => {
  const { handleIncrementBtn, handleDecrementBtn } = useSortSaleProductList();

  return (
    <div
      className={`flex items-center gap-2 ${
        align ? "items-end justify-end" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        <button
          onClick={handleIncrementBtn.bind(null, {
            sort_by,
            sort_direction: "asc",
          })}
        >
          <LuChevronUp />
        </button>
        <button
          onClick={handleDecrementBtn.bind(null, {
            sort_by,
            sort_direction: "desc",
          })}
        >
          <LuChevronDown />
        </button>
      </div>
      <p> {name} </p>
    </div>
  );
};

export default SortSaleProductList;
