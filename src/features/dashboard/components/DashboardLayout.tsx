import SideNavigation from "./SideNavigation";

import { Toaster } from "react-hot-toast";
import { useRef } from "react";
import HeaderOutletLayout from "./HeaderOutletLayout";
import ProductDeleteConfirmation from "../../products/components/ProductDeletConfirmation";
import useCookie from "react-use-cookie";
import { Navigate } from "react-router-dom";

const DashboardLayout = () => {
  const [token, setToken] = useCookie("my_token");

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex w-full " ref={scrollContainerRef}>
      <Toaster position="top-right" reverseOrder={false} />

      <SideNavigation />
      <ProductDeleteConfirmation />
      <HeaderOutletLayout />
    </div>
  );
};

export default DashboardLayout;
