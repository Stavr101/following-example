import FollowerCard from 'components/FollowerCard/FollowerCard';
import { List } from './FollowerCardList.module';

const FollowerCardsList = ({ users, toggleFollow }) => {
  return (
    <List>
      {users.map(user => {
        return (
          <FollowerCard key={user.id} user={user} toggleFollow={toggleFollow} />
        );
      })}
    </List>
  );
};

export default FollowerCardsList;
