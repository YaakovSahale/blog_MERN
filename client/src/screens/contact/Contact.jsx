import Header from "../../components/header/Header";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div>
      <Header titleLarge={"Let's have a talk"} />

      <div className={styles.container}>
        
        <div className={styles.contactSection}>
          <h1>Meet us</h1>
          <div className={styles.iconsContainer}>
            <span className={styles.iconRow}>
              <i className="fa-brands fa-pinterest"></i>
              <p className={styles.iconText}>asdasdasdads</p>
            </span>

            <span className={styles.iconRow}>
              <i className="fa-brands fa-pinterest"></i>
              <p className={styles.iconText}>asdasdasdads</p>
            </span>

            <span className={styles.iconRow}>
              <i className="fa-brands fa-pinterest"></i>
              <p className={styles.iconText}>asdasdasdads</p>
            </span>
          </div>
        </div>

        <div className={styles.contactSection}>
          <h1>Pitch us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut
            rem exercitationem! Corrupti accusamus optio error, dolorem quos
          </p>
        </div>

        <div className={styles.contactSection}>
          <h1>google maps</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
