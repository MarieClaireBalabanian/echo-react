import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-nav">
        <nav>
            <ul className="border-with-padding">
                <li><Link to="/user/asdf">My Profile</Link></li>
                <li><Link to="/user/asdf/gear">My Gear</Link></li>
                <li><Link to="">My Bookmarks</Link></li>
                <li><Link to="">My Rentals</Link></li>
                <li><Link to="">My Messages</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar
