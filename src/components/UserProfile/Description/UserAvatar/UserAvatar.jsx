import PropTypes from 'prop-types';
// import { Avatar } from './UserAvatar.styled';
import Box from 'components/Box/Box';

const UserAvatar = ({ avatar }) => {
  return (
    <Box
      as="img"
      m="0 auto"
      width="avatarSize"
      heigth="avatarSize"
      borderRadius="round"
      bg="avatarBackgroundColor"
      p={7}
      src={avatar}
      alt="User avatar"
    />
  );
  // return <Avatar src={avatar} alt="User avatar" />;
};

UserAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default UserAvatar;
