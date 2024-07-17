import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container flex-row-between">
        <div className={styles.siteLogo}>
          <Link
            to="/"
            className={styles.h1}>
            Ech
            <span className={styles.ring}>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
            </span>
          </Link>
        </div>
        <div className={styles.items}>
          <Link className="button">Login</Link>
          <Link className="button">Join</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
