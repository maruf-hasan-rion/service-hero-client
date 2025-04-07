import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UseDynamicTitle from "../components/UseDynamicTitle";

const MainLayout = () => {
  UseDynamicTitle();
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar></Navbar>
      </div>
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)] mb-24 relative top-24">
        <Outlet></Outlet>
      </div>
      {/* <Outlet></Outlet> */}
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
