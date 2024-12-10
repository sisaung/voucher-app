import {
  LuCircleDollarSign,
  LuFileText,
  LuHouse,
  LuPackage,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const SideNavigation = () => {
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
        <div className="space-y-4">
          {module.map((item, index) => (
            <ul key={index}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? "#2563eb" : "#4b5563",
                  backgroundColor: isActive ? "#eff6ff " : "",
                })}
                className="flex items-center gap-3 px-5 py-2.5 rounded-lg"
              >
                <li> {item.icon} </li>
                <li> {item.name} </li>
              </NavLink>
            </ul>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SideNavigation;
