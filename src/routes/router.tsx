import { createBrowserRouter } from "react-router-dom";
import authRoute from "./authRoute";
import dashboardRoute from "./dashboardRoute";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
    {
        errorElement: <NotFound />,
      },
  ...authRoute,
  ...dashboardRoute,
  
]);

export default router;
