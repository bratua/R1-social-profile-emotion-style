import PropTypes from 'prop-types';
// import { Friends } from './FriendList.styled';
import FriendListItem from './FriendListItem/FriendListItem';
import Box from 'components/Box/Box';

function FriendList({ friends }) {
  return (
    <Box as="ul" width="statisticsWidth">
      {/* <Friends> */}
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
      {/* </Friends> */}
    </Box>
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
