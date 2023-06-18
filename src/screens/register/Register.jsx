import styles from "./register.module.css";

const Register = () => {
  return (
    <div className={styles.registerWarper}>
      <span className={styles.title}>Register</span>
      <form className={styles.form}>
        <label>User Name</label>
        <input type="text" placeholder="Enter your user name" />
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input type="Password" placeholder="Enter your password"/>
        <button className={styles.registerBtn}>Register</button>
      </form>
      <button className={styles.loginBtn}>login</button>
    </div>
  );
};

export default Register;
