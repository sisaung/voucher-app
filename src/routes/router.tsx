import { createBrowserRouter } from "react-router-dom";
import authRoute from "./authRoute";

const router = createBrowserRouter([...authRoute]);

export default router;
