import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import styles from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const API_URL = "http://localhost:5000/api"

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`${API_URL}/posts`);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.home}>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
