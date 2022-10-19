import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';
import FriendListItem from './FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
