import PropTypes from 'prop-types';
import { Tag } from './UserTag.styled';

const UserTag = ({ tag }) => {
  return <Tag>@{tag}</Tag>;
};

UserTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default UserTag;
