import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./register.module.css";

const Register = () => {
  const API_URL = "http://localhost:5000/api";
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await axios.post(`${API_URL}/auth/register`, {
        userInfo,
      });
      console.log("user successfully registered");

      navigate("/login");
    } catch (err) {
      setError(true);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setUserInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className={styles.registerWarper}>
      <span className={styles.title}>Register</span>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          name="userName"
          type="text"
          placeholder="Enter your user name"
          autoComplete="on"
          autoFocus
          onChange={handleOnChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          autoComplete="on"
          onChange={handleOnChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          onChange={handleOnChange}
        />
        <button className={styles.registerBtn} type="submit">
          Register
        </button>
      </form>
      <button className={styles.loginBtn}>
        <NavLink className="link" to="/login">
          Login
        </NavLink>
      </button>
      {
        <div style={{ color: "red", paddingTop: "1rem" }}>
          {error ? "something went wrong!" : ""}
        </div>
      }
    </div>
  );
};

export default Register;
