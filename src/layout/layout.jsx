import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

// eslint-disable-next-line react/prop-types
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
