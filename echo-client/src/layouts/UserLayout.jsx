import UserSidebar from "../components/UserSidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <div className="flex-wrapper">
        <UserSidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default UserLayout;
