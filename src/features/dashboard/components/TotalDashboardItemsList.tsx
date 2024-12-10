import { LuDollarSign, LuFileText, LuPackage, LuUsers } from "react-icons/lu";
import { motion } from "motion/react";

const TotalDashboardItemsList = () => {
  const status = [
    {
      title: "Total Balance",
      value: "$12300",
      icon: <LuDollarSign className=" text-white size-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Total Products",
      value: "20",
      icon: <LuPackage className=" text-white size-6" />,
      color: "bg-green-500 ",
    },
    {
      title: "Total Invoices",
      value: "40",
      icon: <LuFileText className=" text-white size-6" />,
      color: "bg-purple-500 ",
    },
    {
      title: "Total Clients",
      value: "40",
      icon: <LuUsers className=" text-white size-6" />,
      color: "bg-orange-500 ",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="px-5 py-5"
    >
      <h1 className="text-2xl font-bold mb-7"> Dashboard </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {status.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="col-span-1 py-6 bg-white rounded-xl"
          >
            <div className="flex items-center gap-4 px-7">
              <div className={`p-3 ${item.color} rounded-lg `}>{item.icon}</div>
              <div className="space-y-1">
                <p className="text-sm text-gray-700"> {item.title} </p>
                <p className="text-2xl font-medium "> {item.value} </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TotalDashboardItemsList;
