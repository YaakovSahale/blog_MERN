import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./settings.module.css";

const Settings = () => {
  return (
    <div className={styles.setting}>
      <div className={styles.settingsWarper}>
        <div className={styles.title}>
          <span className={styles.updateTitle}>Update Your Account</span>
          <span className={styles.deleteTitle}>Delete Account</span>
        </div>
        <form className={styles.form}>
          <label>Profile Picture</label>
          <div className={styles.profilePic}>
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput" className={styles.fileInput}>
              <i className="fa-regular fa-user icon"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="abcd" />
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <button className={styles.submitBtn}>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
