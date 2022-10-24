import PropTypes from 'prop-types';
import { Name } from './UserName.styled';
import Box from 'components/Box/Box';

const UserName = ({ username }) => {
  return (
    <Box mt={10} fontWeight={3}>
      {username}
    </Box>
  );
  // return <Name>{username}</Name>;
};

UserName.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserName;
