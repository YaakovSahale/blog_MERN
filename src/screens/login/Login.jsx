import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.loginWarper}>
        <span className={styles.title}>Login</span>
      <form className={styles.form}>
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input type="Password" placeholder="Enter your password"/>
        <button className={styles.loginBtn}>Login</button>
      </form>
      <button className={styles.registerBtn}>Register</button>
    </div>
  );
};

export default Login;
