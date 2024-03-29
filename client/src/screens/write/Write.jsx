import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import Header from "../../components/header/Header"
import axios from "axios";
import styles from "./write.module.css";

const Write = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoriesToAdd, setCategoriesToAdd] = useState([]);

  const { user } = useContext(Context);

  const API_URL = "http://localhost:5000/api/";
  const options = ["a 1", "b 2", "c 3"];

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get(API_URL + "categories");
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userName: user.userName,
      categories: categoriesToAdd,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(API_URL + "upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      console.log(API_URL + "posts");
      const { data } = await axios.post(API_URL + "posts", newPost);
      navigate(`/post/${data._id}`);
      // window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Header/>
      <div className={styles.writeWrapper}>
        {file && (
          <img className={styles.img} src={URL.createObjectURL(file)} alt="" />
        )}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fileInput" className={styles.iconWarper}>
              <i className="fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className={styles.input}
              autoFocus={true}
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Tell your story..."
              type="text"
              className={styles.input}
            ></textarea>
          </div>

          <div className={styles.formGroup}>
            <Multiselect
              displayValue="name"
              // onSearch={function noRefCheck() {}}

              onSelect={(e) => {
                const selectedCategories = e.map((cat) => cat.name);
                console.log(selectedCategories);
                setCategoriesToAdd(selectedCategories);
                console.log(selectedCategories);
              }}
              onRemove={(e) => {
                const selectedCategories = e.map((cat) => cat.name);
                console.log(selectedCategories);
                setCategoriesToAdd(selectedCategories);
                console.log(selectedCategories);
              }}
              options={categories}
              showCheckbox
            />
          </div>

          <button className={styles.submitBtn} type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Write;
