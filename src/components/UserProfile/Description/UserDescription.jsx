// import PropTypes from 'prop-types';
import { Description } from './UserDescription.styled';
import UserAvatar from './UserAvatar/UserAvatar';
import UserName from './UserName/UserName';
import UserTag from './UserTag/UserTag';
import UserLocation from './UserLocation/UserLocation';
import Box from 'components/Box/Box';

const UserDescription = ({ username, tag, location, avatar }) => {
  return (
    <Box mt={10} mb={10} textAlign="center">
      {/* <Description> */}
      <UserAvatar avatar={avatar} />
      <UserName username={username} />
      <UserTag tag={tag} />
      <UserLocation location={location} />
      {/* </Description> */}
    </Box>
  );
};

// Description.propTypes = {};

export default UserDescription;
