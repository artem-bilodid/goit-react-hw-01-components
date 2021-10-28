import s from './friend-item.module.scss';
import PropTypes from 'prop-types';

const FriendItem = props => {
  const { className = '', avatar, name, isOnline } = props;

  const friendItemClassName = `${s.item} ${className}`.trim();

  return (
    <li className={friendItemClassName}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
