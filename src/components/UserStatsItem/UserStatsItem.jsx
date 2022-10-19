import PropTypes from 'prop-types';

const UserStatsItem = ({ label, quantity }) => {
  return (
    <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
};

UserStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default UserStatsItem;
