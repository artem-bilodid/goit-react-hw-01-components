import s from './friend-list.module.scss';
import PropTypes from 'prop-types';
import FriendItem from '../friend-item';

const FriendList = props => {
  const { className = '', friends } = props;

  const friendListClassName = `${s.friendList} ${className}`.trim();

  const friendItems = friends.map(({ avatar, name, isOnline, id }) => (
    <FriendItem key={id} className={s.item} avatar={avatar} name={name} isOnline={isOnline} />
  ));

  return <ul className={friendListClassName}>{friendItems}</ul>;
};

FriendList.propTypes = {
  className: PropTypes.string,
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
