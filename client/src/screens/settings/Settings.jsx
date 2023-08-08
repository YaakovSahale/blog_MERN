import { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./settings.module.css";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const [isSuccess, setIsSuccess] = useState(false);

  const API_URL = "http://localhost:5000/api";
  const IMAGES_URL = "http://localhost:5000/images/";
  const defaultProfilePic = "defaultProfilePic.png";

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      userName: userName ? userName : user.userName,
      email: email ? email : user.email,
      password: password ? password : user.password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post(`${API_URL}/upload`, data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const { data } = await axios.put(
        `${API_URL}/users/${user._id}`,
        updatedUser
      );
      dispatch({ type: "UPDATE_SUCCESS", payload: data });

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);

      console.log(data);
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      console.log(err);
    }
  };
  return (
    <div className={styles.setting}>
      <div className={styles.settingsWarper}>
        <div className={styles.title}>
          <span className={styles.updateTitle}>Update Your Account</span>
          <span className={styles.deleteTitle}>Delete Account</span>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className={styles.profilePic}>
            <img
              // src={IMAGES_URL + user.profilePic}

              // src={user.profilePic}
              // src={IMAGES_URL + defaultProfilePic}

              src={
                file
                  ? URL.createObjectURL(file)
                  : user.profilePic
                  ? IMAGES_URL + user.profilePic
                  : IMAGES_URL + defaultProfilePic

                // file ? URL.createObjectURL(file) : IMAGES_URL + user.profilePic

                // file
                //   ? URL.createObjectURL(file)
                //   : IMAGES_URL + defaultProfilePic
              }
              alt=""
            />
            <label htmlFor="fileInput" className={styles.fileInput}>
              <i className="fa-regular fa-user icon"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <label>User Name</label>
          <input
            type="text"
            placeholder={user.userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.submitBtn}>Update</button>
          {isSuccess && (
            <span className={styles.successMsg}>Profile has been updated</span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
