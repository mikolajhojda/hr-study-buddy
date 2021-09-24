import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem';
import { Wrapper } from './UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </div>
  </Wrapper>
);

export default UsersList;
