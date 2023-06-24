import Post from "../post/post";
import styles from "./posts.module.css";

const Posts = ({posts}) => {
  return <div className={styles.posts}>
{posts.map(()=>{})}
  </div>;
};

export default Posts;
