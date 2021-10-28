import styles from './app.module.scss';
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import Profile from '../profile';
import Statistics from '../statistics';
import FriendList from '../friend-list';
import TransactionsTable from '../transactions-table';

function App() {
  return (
    <div className={styles.app}>
      <Profile
        className={styles.profile}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics className={styles.statistics} title="Upload stats" stats={statisticalData} />
      <Statistics className={styles.statistics} stats={statisticalData} />
      <FriendList className={styles.friendList} friends={friends} />
      <TransactionsTable className={styles.transactions} transactions={transactions} />
    </div>
  );
}

export default App;
