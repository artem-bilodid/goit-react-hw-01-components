import styles from "./friend-list.module.scss";

const FriendList = (props) => {
  const { className, friends } = props;

  const friendListClassName = className
    ? `${className} ${styles.friendList}`
    : styles.friendList;

  const friendsItems = friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id} className={styles.item}>
      <span
        className={
          isOnline
            ? `${styles.status} ${styles["status--online"]}`
            : `${styles.status} ${styles["status--offline"]}`
        }
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  ));

  return <ul className={friendListClassName}>{friendsItems}</ul>;
};

export default FriendList;
