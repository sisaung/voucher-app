import {
  LuCircleDollarSign,
  LuFileText,
  LuHouse,
  LuPackage,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { color, motion } from "motion/react";
import { useShallow } from "zustand/shallow";
import useToggleSideNav from "../../../stores/useToggleSideNav";
import { AnimatePresence } from "motion/react";

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
      name: "Invoices",
      path: "/dashboard/invoices",
      icon: <LuFileText className="size-5" />,
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
            <div className={`w-64 h-screen p-4 bg-white border-r shadow-sm  `}>
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
                              ? "bg-gray-100 text-blue-500 hover:text-blue-600 hover:bg-blue-100"
                              : "text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                          } `}
                        >
                          {item.icon} {item.name}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default SideNavigation;
