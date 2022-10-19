import PropTypes from 'prop-types';
import css from './userTag.module.css';

const UserTag = ({ tag }) => {
  return <p className={css.tag}>@{tag}</p>;
};

UserTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default UserTag;
