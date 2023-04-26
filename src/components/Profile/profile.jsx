// import PropTypes from 'prop-types';
import css from '../style.module.css';
import { PROFILE_ID } from '../../constants/consts';
import { useEffect, useState } from 'react';
import main from '../../imgs/main.png';
import logo from '../../imgs/vector.svg';
import line from '../../imgs/ellipse.svg';
import round from '../../imgs/rectangle.svg';
import classNames from 'classnames';

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
    setIsFollowByMe(followersID.includes(PROFILE_ID));
  }, [followers]);

  const normalizeFollowers = () => {
    if (followers.toString().length >= 6) {
      return followers.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return followers;
  };

  const buttonClasses = classNames(css.button, {
    [css.buttonFolowed]: isFollowByMe,
  })

  return (
    <li className={css.container}>
      <img
        className={css.imgLogo}
        src={logo}
        alt="logo"
      />
      <img
        className={css.imgMain}
        src={main}
        alt='main'
      />
      <img
        className={css.imgLine}
        src={round}
      />
      <img
        className={css.imgRound}
        src={line}
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
        {normalizeFollowers()} FOLLOWERS
      </p>
      <button
        onClick={() => handleFollow(id, isFollowByMe)}
        type="button"
        className={buttonClasses}
      >
        {isFollowByMe ? 'FOLLOWING' : 'FOLLOW'}
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
