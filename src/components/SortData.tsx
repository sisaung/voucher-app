import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
import addNewParams from "../utils/addNewParams";

type SortDataProps = {
  name: string;
  sort_by: string;
  align?: boolean;
};

export type SortData = {
  sort_by: string;
  sort_direction: string;
};

const SortData = ({ name, sort_by, align }: SortDataProps) => {
  const [params, setParams] = useSearchParams();

  const handleIncrementBtn = (sortData: SortData) => {
    const searchParams = addNewParams(sortData, params.toString());
    setParams(searchParams);
  };
  const handleDecrementBtn = (sortData: SortData) => {
    const searchParams = addNewParams(sortData, params.toString());
    setParams(searchParams);
  };

  return (
    <div className={`flex gap-2 items-center  ${align ? "justify-end" : ""}`}>
      <div className="flex flex-col">
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

export default SortData;
