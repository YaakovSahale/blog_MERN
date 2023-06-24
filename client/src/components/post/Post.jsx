import styles from "./post.module.css";
import { NavLink } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <img
        className={styles.postImg}
        src="https://cdn.pixabay.com/photo/2023/03/23/14/29/bird-7872096_1280.jpg"
        alt=""
      />

      <div className={styles.postInfo}>
        <div className={styles.postCats}>
          {post.categories?.map((cat, i) => (
            <span className={styles.postCat} key={i}>
              {cat}
            </span>
          ))}
        </div>
        <NavLink
          className={styles.postTitle}
          to={`/post/${post._id}`}
          state={post}
        >
          <span className={styles.postTitle}>{post.title} </span>
        </NavLink>

        <hr />
        <span className={styles.postData}>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      <p className={styles.postDesc}>{post.desc}</p>
    </div>
  );
};

export default Post;
