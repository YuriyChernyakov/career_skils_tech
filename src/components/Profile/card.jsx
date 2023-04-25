// import PropTypes from 'prop-types';
import { Profile } from './profile'
import css from '../style.module.css';

export const CardList = ({ cards, handleFollow }) => {
    return (<ul className={css.card}>{cards.map(card => (<Profile handleFollow={handleFollow} {...card} />))}
    </ul>)
}

// FriendList.propTypes = {
//     friends: PropTypes.string
// };
