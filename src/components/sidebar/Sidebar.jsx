import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>

      <div className={styles.sidebarItem}>
        <p className={styles.sidebarTitle}>ABOUT ME</p>
        <img
          className={styles.sidebarImg}
          src="https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg"
          alt=""
        />
        <p className={styles.contentText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          perferendis cupiditate earum recusandae adipisci dolores repudiandae
        </p>
      </div>

      <div className={styles.sidebarItem}>
        <p className={styles.sidebarTitle}>CATEGORIES</p>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>Life</li>
          <li className={styles.sidebarListItem}>Music</li>
          <li className={styles.sidebarListItem}>Style</li>
          <li className={styles.sidebarListItem}>Sport</li>
          <li className={styles.sidebarListItem}>Tech</li>
          <li className={styles.sidebarListItem}>Cinema</li>
        </ul>
      </div>

      <div className={styles.sidebarItem}>
        <p className={styles.sidebarTitle}>FOLLOW US</p>
        <div className={styles.sidebarSocial}>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
