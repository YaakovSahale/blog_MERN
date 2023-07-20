import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import styles from "./topbar.module.css";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const IMAGES_URL = "http://localhost:5000/images/";
  const defaultProfilePic = "defaultProfilePic.png";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const showUserSettingsImg = (
    <Link to="/settings">
      <img
        className={styles.topImg}
        src={
          user.profilePic
            ? IMAGES_URL + user.profilePic
            : IMAGES_URL + defaultProfilePic
        }
      />
    </Link>
  );

  const showLoginAndRegister = (
    <ul className={styles.topList}>
      <li>
        <NavLink to="/login" className={styles.topListItem}>
          LOGIN
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className={styles.topListItem}>
          REGISTER
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className={styles.topbar}>
      <div className={styles.topLeft}>
        <span className={styles.topIcon}>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-square-instagram"></i>
        </span>
      </div>
      <div className={styles.topCenter}>
        <ul className={styles.topList}>
          <NavLink className="link" to="/">
            <li className={styles.topListItem}>HOME</li>
          </NavLink>
          <NavLink className="link" to="/about">
            <li className={styles.topListItem}>ABOUT</li>
          </NavLink>
          <NavLink className="link" to="/contact">
            <li className={styles.topListItem}>CONTACT</li>
          </NavLink>

          {user && (
            <NavLink className="link" to="/write">
              <li className={styles.topListItem}>WRITE</li>
            </NavLink>
          )}

          <li className={styles.logout} onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className={styles.topRight}>
        {user ? showUserSettingsImg : showLoginAndRegister}

        <span className={styles.searchIcon}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
