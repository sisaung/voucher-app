import { createBrowserRouter } from "react-router-dom";
import authRoute from "./authRoute";
import dashboardRoute from "./dashboardRoute";

const router = createBrowserRouter([...authRoute, ...dashboardRoute]);

export default router;
