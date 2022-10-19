import PropTypes from 'prop-types';
import css from './userName.module.css';

const UserName = ({ username }) => {
  return <p className={css.name}>{username}</p>;
};

UserName.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserName;
