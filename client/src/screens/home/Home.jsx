import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import ErrorPage from "../errorPage/ErrorPage";
import styles from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const API_URL = "http://localhost:5000/api";

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`${API_URL}/posts/${search}`);
      setPosts(data);
    };
    fetchPosts();
  }, [search]);

  const isEmpty = posts.length === 0;

  return (
    <>
      <Header />

      <div className={styles.home}>
        {isEmpty ? (
          <ErrorPage />
        ) : (
          <>
            <Posts posts={posts} />
            <Sidebar />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
