import Breadcrumb from "../../../components/Breadcrumb";
import Header from "../components/Header";
import VoucherLists from "../components/VoucherLists";

const VoucherPage = () => {
  return (
    <div className="px-5 mt-6">
      <Breadcrumb currentTitle="Vouchers" />
      <Header />
      <VoucherLists />
    </div>
  );
};

export default VoucherPage;
