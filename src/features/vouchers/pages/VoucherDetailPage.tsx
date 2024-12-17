import Breadcrumb from "../../../components/Breadcrumb";
import VoucherDetailShow from "../components/VoucherDetailShow";

const VoucherDetailPage = () => {
  return (
    <div className="px-5 mt-6">
      <Breadcrumb
        currentTitle="Voucher Detail"
        links={[{ name: "Vouchers", path: "/dashboard/vouchers" }]}
      />
      <VoucherDetailShow />
    </div>
  );
};

export default VoucherDetailPage;
