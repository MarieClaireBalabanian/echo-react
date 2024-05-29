import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = () => {
  const username = useSelector(state => state.user).username

  return (
    <div className="sidebar-nav">
        <nav>
            <ul className="border-with-padding">
                <li><Link to={`/user/${username}`}>My Profile</Link></li>
                <li><Link to={`/user/${username}/mygear`}>My Gear</Link></li>
                <li><Link to={`/user/${username}/bookmarks`}>My Bookmarks</Link></li>
                <li><Link to={`/user/${username}/rentals`}>My Rentals</Link></li>
                <li><Link to={`/user/${username}/messages`}>My Messages</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar
