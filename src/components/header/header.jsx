import { NavLink } from "react-router-dom";
import { Auth } from "./components/auth/auth";
import { User } from "./components/user/user";
import logo from "../../assets/logo.png";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </NavLink>
      <Auth />
      <User />
    </header>
  );
};
