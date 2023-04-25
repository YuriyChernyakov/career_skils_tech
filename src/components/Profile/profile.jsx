// import PropTypes from 'prop-types';
import css from '../style.module.css';
import { PROFILE_ID } from '../../constants/consts';
import { useEffect, useState } from 'react';

export const Profile = ({
  user,
  tweets,
  followers,
  avatar,
  id,
  handleFollow,
  followersID = [],
}) => {
  const [isFollowByMe, setIsFollowByMe] = useState(false);

  useEffect(() => {
    setIsFollowByMe(followersID.includes(PROFILE_ID))
  }, [followers])

  return (
    <li className={css.container}>
      <img
        src={''}
        alt="logo"
      />
      <img
        className={css.img}
        src={avatar}
        alt={user}
      />
      <p className={css.tweets}>
        {tweets} TWEETS
      </p>
      <p className={css.followers}>
        {followers} FOLLOWERS
      </p>
      <button
        onClick={() => handleFollow(id, isFollowByMe)}
        type="button"
        className={css.button}
      >
        {isFollowByMe ? 'FOLLOWED' : 'FOLLOW'}
      </button>
    </li>
  );
};

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//         followers: PropTypes.number.isRequired,
//         views: PropTypes.number.isRequired,
//         likes: PropTypes.number.isRequired,
//     })
// };
