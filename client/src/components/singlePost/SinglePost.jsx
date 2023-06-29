import { useLocation, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styles from "./singlePost.module.css";
import { Context } from "../../context/Context";
import axios from "axios";

const SinglePost = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const IMAGES_URL = "http://localhost:5000/images";
  const API_URL = "http://localhost:5000/api";
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    try {
      const getPost = async () => {
        const { data } = await axios.get(`${API_URL}/posts/${path}`);
        setPost(data);
      };
      getPost();
    } catch (err) {
      console.log(err);
    }
  }, []);

  //path in dependance?

  const deletePost = async () => {
    try {
      const { data } = await axios.delete(`${API_URL}/posts/${path}`, {
        data: {
          userName: user.userName,
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

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
          {post.userName === user?.userName && (
            <div className={styles.editWrapper}>
              <i className="fa-regular fa-trash-can" onClick={deletePost}></i>
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
