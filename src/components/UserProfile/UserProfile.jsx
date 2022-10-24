// import PropTypes from 'prop-types';
// import { Profile } from './UserProfile.styled';
import UserDescription from 'components/UserProfile/Description/UserDescription';
import UserStats from 'components/UserProfile/UserStats/UserStats';
import Box from '../Box/Box';

const UserProfile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      overflow="hidden"
      width="userProfile"
      border="normal"
      borderStyle="line"
      borderColor="mainBorderColor"
      boxShadow="mainShadow"
    >
      <UserDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <UserStats followers={followers} views={views} likes={likes} />
    </Box>
  );
};

export default UserProfile;
