import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/posts";
import styles from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await axios.get("http://localhost:5000/api/posts");
      console.log(data);
    };
    fetchPosts();
  }, []);

  
  return (
    <>
      <Header />
      <div className={styles.home}>
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
