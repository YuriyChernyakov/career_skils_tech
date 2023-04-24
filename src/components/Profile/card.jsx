// import PropTypes from 'prop-types';
import { Profile } from './profile'
import css from '../style.module.css';

export const CardList = ({ cards }) => {
    return (<ul className={css.card}>{cards.map(card => (<Profile {...card} />))}
    </ul>)
}

// FriendList.propTypes = {
//     friends: PropTypes.string
// };