import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const { username } = useParams();

  return (
    username && (
      <div className="user-sidebar">
        <nav>
          <ul className="border-with-padding">
            <li>
              <Link to={`/user/${username}`}>My Profile</Link>
            </li>
            <li>
              <Link to={`/user/${username}/mygear`}>My Gear</Link>
            </li>
            <li>
              <Link to={`/user/${username}/bookmarks`}>My Bookmarks</Link>
            </li>
            <li>
              <Link to={`/user/${username}/messages`}>My Messages</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  );
};

export default Sidebar;
