// import PropTypes from 'prop-types';
import css from './description.module.css';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserName from '../UserName/UserName';
import UserTag from '../UserTag/UserTag';
import UserLocation from '../UserLocation/UserLocation';

const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className={css.description}>
      <UserAvatar avatar={avatar} />
      <UserName username={username} />
      <UserTag tag={tag} />
      <UserLocation location={location} />

      {/* <img src={avatar} alt="User avatar" className="avatar" /> */}
      {/* <p className="name">{username}</p> */}
      {/* <p className="tag">@{tag}</p> */}
      {/* <p className="location">{location}</p> */}
    </div>
  );
};

// Description.propTypes = {};

export default Description;
