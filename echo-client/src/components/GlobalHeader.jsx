import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalImage from "./GlobalImage"
import '../assets/styles/components/_GlobalHeader.scss';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth); 

  return (
    <header className="global-header">
      <div className="container flex-row-between">
        <div className="">
          <Link className="logo" to="/">
            <GlobalImage image={ {url: '/logo.png', alt: 'Homepage'}} />
          </Link>
        </div>
        <div>
          {isLoggedIn.toString()}
          <Link to="/gear">Find Gear</Link>
          <Link className="button yellow" to="/login">Login</Link>
          <Link className="button orange" to="/signup">Join</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
