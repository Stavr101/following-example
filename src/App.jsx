import { useState, useEffect } from 'react';
import initialUsers from './users.json';

import { Container } from './App.styled';
import FollowerCardsList from 'components/FollowerCardList/FollowerCardList';

const App = () => {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem('users')) ?? initialUsers
  );

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const toggleFollow = id => {
    setUsers(users =>
      users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            followers: user.isFollow ? user.followers - 1 : user.followers + 1,
            isFollow: user.isFollow ? false : true,
          };
        }
        return user;
      })
    );
  };

  return (
    <Container>
      <FollowerCardsList users={users} toggleFollow={toggleFollow} />
    </Container>
  );
};

export default App;
