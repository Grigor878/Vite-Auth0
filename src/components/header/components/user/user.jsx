import styles from "./user.module.scss";

export const User = ({ user }) => {
  return (
    <div className={styles.user}>
      {user.given_name}
      {user.family_name}
    </div>
  );
};
