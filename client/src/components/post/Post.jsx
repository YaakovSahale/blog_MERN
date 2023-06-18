import styles from "./post.module.css";

const Post = () => {
  return (
    <div className={styles.post}>
      <img
        className={styles.postImg}
        src="https://cdn.pixabay.com/photo/2023/03/23/14/29/bird-7872096_1280.jpg"
        alt=""
      />

      <div className={styles.postInfo}>
        <div className={styles.postCats}>
          <span className={styles.postCat}>Music</span>
          <span className={styles.postCat}>Life</span>
        </div>

        <span className={styles.postTitle}>Lorem ipsum dolor sit amet </span>
        <hr />
        <span className={styles.postData}>1 hour ago</span>
      </div>

      <p className={styles.postDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        eligendi in quam distinctio nam voluptate omnis maiores exercitationem
        error assumenda pariatur vitae ex velit voluptas, fuga reprehenderit
        fugit quod aut! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam eligendi in quam distinctio nam voluptate omnis maiores
        exercitationem error assumenda pariatur vitae ex velit voluptas, fuga
        reprehenderit fugit quod aut! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quibusdam eligendi in quam distinctio nam voluptate
        omnis maiores exercitationem error assumenda pariatur vitae ex velit
        voluptas, fuga reprehenderit fugit quod aut!
      </p>
    </div>
  );
};

export default Post;
