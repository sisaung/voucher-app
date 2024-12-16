import { useShallow } from "zustand/shallow";
import useToggleSideNav from "../../../stores/useToggleSideNav";
import Header from "./Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

const HeaderOutletLayout = () => {
  const { isOpen } = useToggleSideNav(
    useShallow((state) => ({ isOpen: state.isOpen }))
  );

  return (
    <div
      className={`w-full h-screen overflow-auto ${
        isOpen ? "ml-64" : ""
      } duration-300 transition-all `}
    >
      <Header />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default HeaderOutletLayout;
