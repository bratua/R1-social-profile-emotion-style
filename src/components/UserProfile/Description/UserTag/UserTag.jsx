import PropTypes from 'prop-types';
import { Tag } from './UserTag.styled';
import Box from 'components/Box/Box';

const UserTag = ({ tag }) => {
  return (
    <Box mt={8} color="secondTextColor" fontSize={3}>
      @{tag}
    </Box>
  );
  // return <Tag>@{tag}</Tag>;
};

UserTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default UserTag;
