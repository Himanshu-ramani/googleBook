import { RouterProvider } from "react-router-dom";
import router from "./routes";

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
