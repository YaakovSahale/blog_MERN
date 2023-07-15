import styles from "./header.module.css";

const Header = ({ titleSmall, titleLarge }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitles}>
        <span className={styles.headerTitleSm}>{titleSmall}</span>
        <span className={styles.headerTitleLg}>{titleLarge}</span>
      </div>
      <img
        className={styles.headerImg}
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
};

export default Header;
