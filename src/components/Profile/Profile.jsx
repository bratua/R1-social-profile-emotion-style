// import PropTypes from 'prop-types';
import css from './profile.module.css';
import Description from 'components/Description/Description';
import UserStats from 'components/UserStats/UserStats';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <UserStats followers={followers} views={views} likes={likes} />
    </div>
  );
};

export default Profile;
