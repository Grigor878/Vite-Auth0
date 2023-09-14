import { Auth } from "./components/auth/auth";
import styles from "./header.module.scss";

export const Header = () => {
  return <div className={styles.header}>
    <Auth/>
  </div>;
};
