import PropTypes from 'prop-types';
import { StatsList, StatsItem, Label, Quantity } from './UserStats.styled';

const UserStats = ({ followers, views, likes }) => {
  return (
    <StatsList>
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
    </StatsList>
  );
};

UserStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default UserStats;
