import Sidebar from "../components/user/Sidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <div className="flex-wrapper">
        <Sidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default UserLayout;
