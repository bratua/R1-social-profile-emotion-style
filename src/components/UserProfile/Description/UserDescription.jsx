// import PropTypes from 'prop-types';
import { Description } from './UserDescription.styled';
import UserAvatar from './UserAvatar/UserAvatar';
import UserName from './UserName/UserName';
import UserTag from './UserTag/UserTag';
import UserLocation from './UserLocation/UserLocation';

const UserDescription = ({ username, tag, location, avatar }) => {
  return (
    <Description>
      <UserAvatar avatar={avatar} />
      <UserName username={username} />
      <UserTag tag={tag} />
      <UserLocation location={location} />
    </Description>
  );
};

// Description.propTypes = {};

export default UserDescription;
