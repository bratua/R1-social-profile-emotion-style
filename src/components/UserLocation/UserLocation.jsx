import PropTypes from 'prop-types';
import css from './userLocation.module.css';

const UserLocation = ({ location }) => {
  return <p className={css.location}>{location}</p>;
};

UserLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default UserLocation;
