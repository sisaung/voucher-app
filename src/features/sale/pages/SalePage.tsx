import Breadcrumb from "../../../components/Breadcrumb";
import SaleSection from "../components/SaleSection";

const SalePage = () => {
  return (
    <div className="px-5 mt-8">
      <Breadcrumb currentTitle="Sale" />
      <SaleSection />
    </div>
  );
};

export default SalePage;
