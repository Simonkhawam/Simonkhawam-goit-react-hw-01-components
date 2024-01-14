import Profile from './Profile';
import user from '../user/user.json';
import Statictics from './Statistics';
import data from '../user-II/data.json';
import FriendList from './FriendList';
import friends from '../user-II/friend-list/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../user-III/transactions.json';
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
      <Statictics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
