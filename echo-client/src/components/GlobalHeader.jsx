import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalImage from "./GlobalImage"
import '../assets/styles/components/_GlobalHeader.scss';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth);
  const username = useSelector((state) => state.user?.username);

  return (
    <header className="global-header">
      <div className="container flex-row-between">
        <div className="">
          <Link className="logo" to="/">
            <GlobalImage image={ {url: '/logo.png', alt: 'Homepage'}} />
          </Link>
        </div>
        <div className="flex-align-center">
          <Link to="/gear">Find Gear</Link>
          {isLoggedIn && username ? 
            <>
              <Link className="button yellow" to={`/user/${username}`}>Account</Link>
              <Link className="button orange" to="/signout">Sign Out</Link>
            </>
            :   
            <>
              <Link className="button yellow" to="/login">Log In</Link>
              <Link className="button orange" to="/signup">Join</Link>
            </>
          }
        </div>
      </div>
    </header>
  );
};
export default Header;
