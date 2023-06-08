import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/posts";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
