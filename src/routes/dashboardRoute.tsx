import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import productRoute from "./productRoute";
import voucherRoute from "./voucherRoute";

const dashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...productRoute,
      ...voucherRoute,
    ],
  },
];
export default dashboardRoute;
