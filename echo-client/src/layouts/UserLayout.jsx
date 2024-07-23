import UserSidebar from "../components/UserSidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
      <div className="container">
        <UserSidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
  );
};
export default UserLayout;
