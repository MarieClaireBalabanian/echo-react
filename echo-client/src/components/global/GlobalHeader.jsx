import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserAuthStatus } from "../../features/user/authSlice";
import { setUserProfile } from "../../features/user/userSlice";
import GlobalImage from "./GlobalImage"
import '../../assets/styles/components/_GlobalHeader.scss';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth);
  const username = useSelector((state) => state.user?.username);

  const signout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwttoken,");
    dispatch(setUserAuthStatus(false));
    dispatch(setUserProfile(null));
    navigate("/");
  }

  return (
    <header className="global-header">
      <div className="container flex justify-between">
        <div className="">
          <Link className="logo" to="/">
            <GlobalImage image={ {url: '/logo.png', alt: 'Homepage'}} />
          </Link>
        </div>
        <div className="flex align-center">
          <Link to="/gear">Find Gear</Link>
          {isLoggedIn && username ? 
            <>
              <Link className="button yellow" to={`/user/${username}`}>Account</Link>
              <Link className="button orange" to="/" onClick={signout}>Sign Out</Link>
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
