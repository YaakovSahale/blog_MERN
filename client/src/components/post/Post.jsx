import styles from "./post.module.css";
import { Link, NavLink } from "react-router-dom";

const Post = ({ post }) => {
  const IMAGES_URL = "http://localhost:5000/images";
  return (
    <div className={styles.post}>
      <img
        className={styles.postImg}
        src={`${IMAGES_URL}/${post.photo}`}
        alt=""
      />

      <div className={styles.postInfo}>
        <div className={styles.postCats}>
          {post.categories?.map((cat, i) => (
            <Link key={i} className="link" to={`/?category=${cat}`}>
              <span className={styles.postCat} key={i}>
                {cat}
              </span>
            </Link>
          ))}
        </div>
        <Link
          className={styles.postTitle}
          to={`/post/${post._id}`}
        >
          <span className={styles.postTitle}>{post.title} </span>
        </Link>

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
