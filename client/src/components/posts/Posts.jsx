import Post from "../post/post";
import styles from "./posts.module.css";

const Posts = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
