import SideNavigation from "./SideNavigation";

import { Toaster } from "react-hot-toast";
import { useEffect, useRef } from "react";
import HeaderOutletLayout from "./HeaderOutletLayout";
import ProductDeleteConfirmation from "../../products/components/ProductDeletConfirmation";
import useCookie from "react-use-cookie";
import { Navigate } from "react-router-dom";
import useTokenStore from "../../../stores/useTokenStore";
import { useShallow } from "zustand/shallow";
import VoucherDeleteConfirmation from "../../vouchers/components/VoucherDeleteConfirmation";
import ChooseVoucherDownloadType from "../../vouchers/components/ChooseVoucherDownloadType";
import ChooseSaleProductModal from "../../sale/components/ChooseSaleProductModal";
import useUserStore from "../../../stores/useUserStore";

const DashboardLayout = () => {
  const [token] = useCookie("my_token");
  const [user] = useCookie("user");
  const { setTokenState } = useTokenStore(
    useShallow((state) => ({ setTokenState: state.setTokenState }))
  );
  const { setUserStore } = useUserStore(
    useShallow((state) => ({ setUserStore: state.setUserStore }))
  );

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  if (!token) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    setTokenState(token);
    setUserStore(JSON.parse(user));
  }, [token]);

  return (
    <div className="flex w-full " ref={scrollContainerRef}>
      <Toaster position="top-center" reverseOrder={false} />

      <SideNavigation />
      <ProductDeleteConfirmation />
      <VoucherDeleteConfirmation />
      <ChooseVoucherDownloadType />
      <ChooseSaleProductModal />
      <HeaderOutletLayout />
    </div>
  );
};

export default DashboardLayout;
