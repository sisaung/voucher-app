import VoucherDetailLoader from "./VoucherDetailLoader";

const VoucherDetailLoaderHandle = ({ isFetching }: { isFetching: boolean }) => {
  const loaderArr = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <>
      {isFetching &&
        loaderArr.map((_, index) => <VoucherDetailLoader key={index} />)}
    </>
  );
};

export default VoucherDetailLoaderHandle;
