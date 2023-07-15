import Header from "../../components/header/Header";
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <Header titleLarge={"Create  Dream"} />

      <div className={styles.container}>
        <div className={styles.aboutSection}>
          <h1>who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut
            rem exercitationem! Corrupti accusamus optio error, dolorem quos
            iure quam illum voluptate voluptatum, id assumenda recusandae
            inventore, accusantium pariatur fugit? Impedit unde corrupti ipsam
            incidunt reiciendis saepe sed, ut perspiciatis veniam tempore
            explicabo, autem minima dolores vitae accusantium ad obcaecati
            repellat fugit aperiam
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h1>what we do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut
            rem exercitationem! Corrupti accusamus optio error, dolorem quos
            iure quam illum voluptate voluptatum, id assumenda recusandae
            inventore, accusantium pariatur fugit? Impedit unde corrupti ipsam
            incidunt reiciendis saepe sed, ut perspiciatis veniam tempore

          </p>
        </div>

        <div className={styles.aboutSection}>
          <h1>our values</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut
            rem exercitationem! Corrupti accusamus optio error, dolorem quos
            iure quam illum voluptate voluptatum, id assumenda recusandae
            inventore, accusantium pariatur fugit? Impedit

          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
