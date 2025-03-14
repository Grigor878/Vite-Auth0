import { useAuth0 } from "@auth0/auth0-react";
import { User } from "../../components/user/user";
import styles from "./auth.module.scss";

export const Auth = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className={styles.auth}>
      {user && <User user={user} />}
      {isAuthenticated ? (
        <button onClick={logout}>Log-Out</button>
      ) : (
        // <button onClick={loginWithPopup}>Log-In</button>
        <button onClick={loginWithRedirect}>Log-In</button>
      )}
    </div>
  );
};
