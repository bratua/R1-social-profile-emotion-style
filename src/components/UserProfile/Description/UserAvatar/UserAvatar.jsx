import PropTypes from 'prop-types';
import { Avatar } from './UserAvatar.styled';

const UserAvatar = ({ avatar }) => {
  return <Avatar src={avatar} alt="User avatar" />;
};

UserAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default UserAvatar;
