import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendList/flitem.jsx'
import css from '../FriendList/fl.module.css';
export const FriendList = ({ friends }) => {
    return (<ul className={css.friendList}>{friends.map(friend => (<FriendListItem {...friend} />))}
    </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.string
};