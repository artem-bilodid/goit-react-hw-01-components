import styles from "./profile.module.scss";

const Profile = (props) => {
  const { className, name, tag, location, avatar, stats } = props;

  const profileClassName = className
    ? `${className} ${styles.profile}`
    : styles.profile;

  return (
    <div className={profileClassName}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stats__item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
