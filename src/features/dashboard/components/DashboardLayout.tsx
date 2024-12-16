import SideNavigation from "./SideNavigation";

import { Toaster } from "react-hot-toast";
import { useRef } from "react";
import HeaderOutletLayout from "./HeaderOutletLayout";
import Modal from "../../products/components/ProductDeletConfirmation";

const DashboardLayout = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex w-full " ref={scrollContainerRef}>
      <Toaster position="top-right" reverseOrder={false} />

      <SideNavigation />
      <Modal />
      <HeaderOutletLayout />
    </div>
  );
};

export default DashboardLayout;
