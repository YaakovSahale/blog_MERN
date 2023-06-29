import { useLocation, Link } from "react-router-dom";
import { useContext, useState } from "react";
import styles from "./singlePost.module.css";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const { user } = useContext(Context);
  const { state: tempPost } = useLocation();
  const [post, setPost] = useState(tempPost);
  const IMAGES_URL = "http://localhost:5000/images";

  return (
    <div className={styles.singlePost}>
      <div className={styles.singlePostWrapper}>
        {post.photo && (
          <img
            className={styles.singlePostImg}
            src={`${IMAGES_URL}/${post.photo}`}
            alt=""
          />
        )}
        <h1 className={styles.title}>
          <p>{post.title}</p>
          {post.userName === user.userName && (
            <div className={styles.editWrapper}>
              <i className="fa-regular fa-trash-can"></i>
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
          )}
        </h1>
        <div className={styles.info}>
          <span className={styles.author}>
            Author:
            <Link className="link" to={`/?userName=${post.userName}`}>
              <b>{post.userName}</b>
            </Link>
          </span>
          <span className={styles.date}>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className={styles.desc}>{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
