import PropTypes from 'prop-types';
// import { Location } from './UserLocation.styled';
import Box from 'components/Box/Box';

const UserLocation = ({ location }) => {
  return (
    <Box mt={8} color="secondTextColor" fontSize={3}>
      {location}
    </Box>
  );
  // return <Location>{location}</Location>;
};

UserLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default UserLocation;
