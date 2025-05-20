import UserMenu from "../components/user/UserMenu";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
      <div className="container">
        <UserMenu />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
  );
};
export default UserLayout;
