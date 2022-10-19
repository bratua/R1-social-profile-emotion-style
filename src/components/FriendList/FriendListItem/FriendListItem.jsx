import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

function FriendListItem({ avatar, isOnline, name }) {
  return (
    <FriendItem>
      <FriendStatus status={isOnline} />
      <FriendAvatar status={isOnline} src={avatar} alt="User avatar" />
      <FriendName status={isOnline}>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
