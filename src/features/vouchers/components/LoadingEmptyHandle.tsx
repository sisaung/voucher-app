import EmptyRow from "../../../components/EmptyRow";
import VoucherListsLoader from "./VoucherListsLoader";

type LoadingEmptyHandleProps = {
  isPending: boolean;
  length: number;
  loaderArr: number[];
};
const LoadingEmptyHandle = ({
  isPending,
  length,
  loaderArr,
}: LoadingEmptyHandleProps) => {
  return (
    <>
      {isPending ? (
        loaderArr.map((_, index) => <VoucherListsLoader key={index} />)
      ) : length === 0 ? (
        <EmptyRow />
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingEmptyHandle;
