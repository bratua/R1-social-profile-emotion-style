// import PropTypes from 'prop-types';
import { Profile } from './UserProfile.styled';
import UserDescription from 'components/UserProfile/Description/UserDescription';
import UserStats from 'components/UserProfile/UserStats/UserStats';

const UserProfile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Profile>
      <UserDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <UserStats followers={followers} views={views} likes={likes} />
    </Profile>
  );
};

export default UserProfile;
