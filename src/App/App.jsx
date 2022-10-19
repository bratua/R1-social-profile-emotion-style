// import Wraper from './Wraper/Wraper';
import UserProfile from '../components/UserProfile/UserProfile';
import UploadStatistics from '../components/Statistics/UploadStatistics';
import FriendList from '../components/FriendList/FriendList';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import user from '../Data/user.json';
import statistics from '../Data/statistics.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <UserProfile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></UserProfile>
      <UploadStatistics data={statistics} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
