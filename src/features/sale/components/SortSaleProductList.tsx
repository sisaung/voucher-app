import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { SortData } from "../../../components/SortData";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { useShallow } from "zustand/shallow";
import { Params } from "../../../types/product";

type SortDataProps = {
  name: string;
  sort_by: string;
  align?: boolean;
};

const SortSaleProductList = ({ name, sort_by, align }: SortDataProps) => {
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
