import { useAuth0 } from "@auth0/auth0-react";
import styles from "./auth.module.scss";

export const Auth = () => {
  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
  console.log("User - ", user);

  return (
    <div className={styles.auth}>
      {isAuthenticated ? (
        <button onClick={logout}>Log-Out</button>
      ) : (
        <button onClick={loginWithPopup}>Log-In-Popup</button>
      )}
      {/* <button onClick={loginWithRedirect}>Log-In</button> */}
    </div>
  );
};
