import {
  LuCircleDollarSign,
  LuFileText,
  LuHouse,
  LuPackage,
  LuUser,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { useShallow } from "zustand/shallow";
import useToggleSideNav from "../../../stores/useToggleSideNav";
import { AnimatePresence } from "motion/react";
import Logout from "../../../components/Logout";

const SideNavigation = () => {
  const { isOpen } = useToggleSideNav(
    useShallow((state) => ({ isOpen: state.isOpen }))
  );

  const module = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LuHouse className="size-5" />,
    },
    {
      name: "Products",
      path: "/dashboard/products",
      icon: <LuPackage className="size-5" />,
    },
    {
      name: "Sale",
      path: "/dashboard/sale",
      icon: <LuCircleDollarSign className="size-5" />,
    },
    {
      name: "Vouchers",
      path: "/dashboard/vouchers",
      icon: <LuFileText className="size-5" />,
    },
    {
      name: "User Profile",
      path: "/dashboard/user-profile",
      icon: <LuUser className="size-5" />,
    },
  ];

  return (
    <>
      {isOpen && (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed top-0 left-0 h-full z-20"
          >
            <div
              className={`flex flex-col w-64 h-screen p-4 bg-white border-r shadow-sm  `}
            >
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", duration: 0.5, damping: 20 }}
              >
                <h1 className="mb-10 text-xl font-bold"> Voucher App </h1>
              </motion.div>

              <ul className="space-y-4">
                {module.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className=""
                      end={item.path === "/dashboard"}
                    >
                      {({ isActive }) => (
                        <span
                          className={`flex items-center gap-3 px-5 py-2.5 rounded-lg  duration-300 ${
                            isActive
                              ? "bg-lime-400   hover:bg-lime-500"
                              : " hover:bg-lime-400 hover:text-black text-gray-500 "
                          } `}
                        >
                          {item.icon} {item.name}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Logout />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default SideNavigation;
