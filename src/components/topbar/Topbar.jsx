import styles from "./topbar.module.css";

const Topbar = () => {
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
          <li className={styles.topListItem}>HOME</li>
          <li className={styles.topListItem}>ABOUT</li>
          <li className={styles.topListItem}>CONTACT</li>
          <li className={styles.topListItem}>WRITE</li>
          <li className={styles.topListItem}>LOGOUT</li>
        </ul>
      </div>
      <div className={styles.topRight}>
        <img
          className={styles.topImg}
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <span className={styles.searchIcon}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
