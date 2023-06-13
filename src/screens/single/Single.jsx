import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import styles from "./single.module.css";

const Single = () => {
  return (
    <div className={styles.single}>
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
