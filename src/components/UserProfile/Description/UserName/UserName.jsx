import PropTypes from 'prop-types';
import { Name } from './UserName.styled';

const UserName = ({ username }) => {
  return <Name>{username}</Name>;
};

UserName.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserName;
