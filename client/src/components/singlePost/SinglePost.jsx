import { useLocation,Link } from "react-router-dom";
import { useState } from "react";
import styles from "./singlePost.module.css";

const SinglePost = () => {
  const {state:tempPost} = useLocation();
  const [post, setPost] = useState(tempPost);

  return (
    <div className={styles.singlePost}>
      <div className={styles.singlePostWrapper}>
        <img
          className={styles.singlePostImg}
          src="https://cdn.pixabay.com/photo/2023/06/07/13/02/butterfly-8047187_1280.jpg"
          alt=""
        />
        <h1 className={styles.title}>
          <p>{post.title}</p>
          <div className={styles.editWrapper}>
            <i className="fa-regular fa-trash-can"></i>
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
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
