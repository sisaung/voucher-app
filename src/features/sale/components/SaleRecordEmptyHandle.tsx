import ProductListsLoader from "../../../components/ProductListsLoader";
import SaleRecordEmptyRow from "./SaleRecordEmptyRow";

type SaleRecordEmptyHandleProps = {
  isPending: boolean;
  length: number;
};

const SaleRecordEmptyHandle = ({
  isPending,
  length,
}: SaleRecordEmptyHandleProps) => {
  return (
    <>
      {isPending ? (
        <ProductListsLoader />
      ) : length === 0 ? (
        <SaleRecordEmptyRow />
      ) : (
        ""
      )}
    </>
  );
};

export default SaleRecordEmptyHandle;
