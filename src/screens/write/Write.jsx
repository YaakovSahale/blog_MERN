import styles from "./write.module.css";

const Write = () => {
  return (
    <div className={styles.writeWrapper}>
      <img
        className={styles.img}
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="fileInput" className={styles.iconWarper}>
            <i className="fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            autoFocus={true}
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            placeholder="Tell your story..."
            type="text"
            className={styles.input}
          ></textarea>
        </div>
        <button className={styles.submitBtn}>Publish</button>
      </form>
    </div>
  );
};

export default Write;
