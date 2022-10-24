import PropTypes from 'prop-types';
import Box from 'components/Box/Box';
import { StatsItem, Label, Quantity } from './UserStats.styled';

const UserStats = ({ followers, views, likes }) => {
  return (
    <Box
      as="ul"
      display="flex"
      p="0"
      m="0"
      height="userStatsHeight"
      justifyContent="center"
      alignContent="center"
      bg="statsBackgroundColor"
    >
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </Box>
  );
};

UserStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default UserStats;
