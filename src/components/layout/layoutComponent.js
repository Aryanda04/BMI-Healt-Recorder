import { Outlet } from "react-router-dom";
import Header from "./Navbar";
import Sidebar from "./Sidebar";

const LayoutComponent = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="main-panel">
          <Header />
          <div className="content">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LayoutComponent;
