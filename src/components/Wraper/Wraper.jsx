import css from './wraper.module.css';
import Profile from '../Profile/Profile';
// import user from '../../user.json';
import users from '../../user.json';

const Wraper = () => {
  return (
    <div className={css.wraper}>
      {users.map(user => {
        return (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101',
            }}
          >
            <Profile
              key={user.username}
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            ></Profile>
          </div>
        );
      })}
    </div>
  );
};

// const Wraper = () => {
//   return (
//     <div className={css.wraper}>
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <Profile
//           username={user.username}
//           tag={user.tag}
//           location={user.location}
//           avatar={user.avatar}
//           stats={user.stats}
//         ></Profile>
//       </div>
//     </div>
//   );
// };

export default Wraper;
