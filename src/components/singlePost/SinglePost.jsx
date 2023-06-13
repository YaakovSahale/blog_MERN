import styles from "./singlePost.module.css";

const SinglePost = () => {
  return (
    <div className={styles.singlePost}>
      <div className={styles.singlePostWrapper}>
        <img
          className={styles.singlePostImg}
          src="https://cdn.pixabay.com/photo/2023/06/07/13/02/butterfly-8047187_1280.jpg"
          alt=""
        />
        <h1 className={styles.title}>
          <p>Lorem ipsum, dolor sit amet consectetur</p>
          <div className={styles.editWrapper}>
            <i className="fa-regular fa-trash-can"></i>
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
        </h1>
        <div className={styles.info}>
          <span className={styles.author}>
            Author:<b>qwer</b>
          </span>
          <span className={styles.date}>1 hour ago</span>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          laboriosam ipsum debitis. Esse autem laboriosam quod velit?
          Consequuntur tenetur quo rem dolore vitae repudiandae non labore
          quisquam facilis! Vero, nobis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatem laboriosam ipsum debitis. Esse autem
          laboriosam quod velit? Consequuntur tenetur quo rem dolore vitae
          repudiandae non labore quisquam facilis! Vero, nobis! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam
          ipsum debitis. Esse autem laboriosam quod velit? Consequuntur tenetur
          quo rem dolore vitae repudiandae non labore quisquam facilis! Vero,
          nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem laboriosam ipsum debitis. Esse autem laboriosam quod velit?
          Consequuntur tenetur quo rem dolore vitae repudiandae non labore
          quisquam facilis! Vero, nobis!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
