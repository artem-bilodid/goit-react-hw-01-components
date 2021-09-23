import styles from './friend-list.module.scss';
import PropTypes from 'prop-types';

const FriendList = props => {
  const { className, friends } = props;

  const friendListClassName = className ? `${className} ${styles.friendList}` : styles.friendList;

  const friendsItems = friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  ));

  return <ul className={friendListClassName}>{friendsItems}</ul>;
};

FriendList.propTypes = {
  className: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
