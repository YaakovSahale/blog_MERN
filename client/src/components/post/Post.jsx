import styles from "./post.module.css";
import { Link, NavLink } from "react-router-dom";

const Post = ({ post }) => {
  const IMAGES_URL = "http://localhost:5000/images/";
  const defaultArticlePic = "defaultArticlePic.png";

  <span className={styles.postTitle}>{post.title}</span>;

  const postImg = (
    <Link to={`/post/${post._id}`}>
      <img
        className={styles.postImg}
        src={
          post.photo ? IMAGES_URL + post.photo : IMAGES_URL + defaultArticlePic
        }
        alt=""
      />
    </Link>
  );

  return (
    <div className={styles.post}>
      {postImg}

      <div className={styles.postInfo}>
        <div className={styles.postCats}>
          {post.categories.map((cat, i) => (
            <Link className="link" to={`/?category=${cat}`} key={i}>
              <span className={styles.postCat}>{cat}</span>
            </Link>
          ))}
        </div>

        <Link to={`/post/${post._id}`} className={styles.postTitle}>
          <span className={styles.postTitle}>{post.title}</span>
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
