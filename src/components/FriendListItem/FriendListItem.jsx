import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './friendListItem.module.css';

function FriendListItem({ avatar, isOnline, name }) {
  return (
    <li className={css.item}>
      <span
        //   className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}
        className={clsx(css.status, {
          [css.isOnline]: isOnline,
          [css.isOffline]: !isOnline,
        })}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
