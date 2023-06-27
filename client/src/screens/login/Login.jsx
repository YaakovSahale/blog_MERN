import { NavLink } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import styles from "./login.module.css";

const Login = () => {
  const { user, dispatch, isFetching } = useContext(Context);
  const userRef = useRef();
  const passwordRef = useRef();
  const API_URL = "http://localhost:5000/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, {
        userName: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      console.log("user successfully logged in");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className={styles.loginWarper}>
      <span className={styles.title}>Login</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" placeholder="Enter your UserName" ref={userRef} />
        <label>Password</label>
        <input
          type="Password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className={styles.loginBtn} type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className={styles.registerBtn}>
        <NavLink className="link" to="/register">
          Register
        </NavLink>
      </button>
    </div>
  );
};

export default Login;
