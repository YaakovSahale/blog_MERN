import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import styles from "./write.module.css";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const API_URL = "http://localhost:5000/api";
  // const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userName: user.userName,
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
        const { data: massage } = await axios.post(`${API_URL}/upload`, data);
        console.log(massage);
        console.log(newPost);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const { data } = await axios.post(`${API_URL}/posts`, newPost);
      console.log(data);
      // navigate(`/post/${data._id}`);
      // window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
        <button className={styles.submitBtn} type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
