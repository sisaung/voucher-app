import EmptyRow from "./EmptyRow";
import ProductListsLoader from "./ProductListsLoader";

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
        loaderArr.map((_, index) => <ProductListsLoader key={index} />)
      ) : length === 0 ? (
        <EmptyRow />
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingEmptyHandle;
