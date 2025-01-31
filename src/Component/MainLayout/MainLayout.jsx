import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
