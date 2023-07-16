import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import axios from "axios";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const API_URL = "http://localhost:5000/api";

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(`${API_URL}/categories`);
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <p className={styles.sidebarTitle}>ARTICLE</p>
        <img
          className={styles.sidebarImg}
          src="https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg"
          alt=""
        />
        <p className={styles.contentText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          perferendis cupiditate earum recusandae.
        </p>
      </div>

      <div className={styles.sidebarItem}>
        <p className={styles.sidebarTitle}>CATEGORIES</p>
        <ul className={styles.sidebarList}>
          {categories.map((cat) => (
            <Link key={cat._id} to={`/?category=${cat.name}`} className="link">
              <li className={styles.sidebarListItem}>{cat.name}</li>
            </Link>
          ))}
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
