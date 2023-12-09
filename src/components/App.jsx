import { Profile } from './Profile/Profile'
import user from 'user.json'
import { Statistics } from './Statistics/Statistics'
import data from 'data.json'
import { FriendList } from './FriendList/FriendList'
import friend from 'friends.json'
import { Transactions } from './Transactions/Transactions'
import transaction from 'transactions.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />  

      <Statistics title="Uploud stats" stats={data}/>

      <FriendList friends={friend}/>

      <Transactions transactions={transaction}/>
    </div>
  );
};
