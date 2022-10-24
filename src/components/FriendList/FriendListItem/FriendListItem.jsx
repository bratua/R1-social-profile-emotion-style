import PropTypes from 'prop-types';
import Box from 'components/Box/Box';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

function FriendListItem({ avatar, isOnline, name }) {
  return (
    <Box
      as="li"
      display="flex"
      gridGap={5}
      p={5}
      m={5}
      alignItems="center"
      border="normal"
      borderStyle="line"
      borderColor="mainBorderColor"
      borderRadius="r15"
      boxShadow="mainShadow"
    >
      <FriendStatus status={isOnline} />
      <FriendAvatar status={isOnline} src={avatar} alt="User avatar" />
      <FriendName status={isOnline}>{name}</FriendName>
    </Box>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
