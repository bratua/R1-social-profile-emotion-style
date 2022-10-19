import PropTypes from 'prop-types';
import css from './userAvatar.module.css';

const UserAvatar = ({ avatar }) => {
  return <img src={avatar} alt="User avatar" className={css.avatar} />;
};

UserAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default UserAvatar;
