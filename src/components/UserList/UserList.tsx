// Libs
import React from 'react';

// Contexts
import { useData } from '../../contexts/Data';

// Styles
import * as S from './UserList.styles';

export default function UserList() {
  const { users, getSelectedUser } = useData();

  return (
    <S.Container>
      {users.map((user) => (
        <button key={user.id} type="button" onClick={() => getSelectedUser(user)}>
          <li>{user.name}</li>
        </button>
      ))}
    </S.Container>
  );
}
