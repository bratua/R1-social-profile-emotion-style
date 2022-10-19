import PropTypes from 'prop-types';
import { Location } from './UserLocation.styled';

const UserLocation = ({ location }) => {
  return <Location>{location}</Location>;
};

UserLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default UserLocation;
