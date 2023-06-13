import Post from "../post/post";
import styles from "./posts.module.css";

const Posts = () => {
  return <div className={styles.posts}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </div>;
};

export default Posts;
