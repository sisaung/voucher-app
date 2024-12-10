import { Outlet } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import Header from "./Header";
import useToggleSideNav from "../../../stores/useToggleSideNav";
import { useShallow } from "zustand/shallow";
import { AnimatePresence } from "motion/react";

const DashboardLayout = () => {
  const { isOpen } = useToggleSideNav(
    useShallow((state) => ({ isOpen: state.isOpen }))
  );

  return (
    <div className="flex w-full ">
      <AnimatePresence mode="wait">
        {isOpen && <SideNavigation />}
      </AnimatePresence>

      <div
        className={`w-full h-screen overflow-auto ${
          isOpen ? "ml-64" : ""
        } duration-300 transition-all `}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
