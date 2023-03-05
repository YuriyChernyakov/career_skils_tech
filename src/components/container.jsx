import { Profile } from './Profile/profile';
import user from '../data/user.json';
import style from '../components/style.module.css';
import { Statistics } from './Statistics/statistics';
import { Transaction } from './Transaction/transaction';
import statistics from '../data/statistics.json';
import friends from '../data/friendList.json';
import transaction from '../data/transaction.json'
import {FriendList} from './FriendList/friendList'

export const Container = () => {
    return (
        <div className={style.container}>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={statistics} />
<FriendList friends={friends} />
<Transaction items={transaction} />        
</div>
    )
};