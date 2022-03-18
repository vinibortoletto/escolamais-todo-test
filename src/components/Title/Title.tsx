// Libs
import React from 'react';

// Images
import { IoIosArrowBack } from 'react-icons/io';

// Contexts
import { useData } from '../../contexts/Data';

// Styles
import * as S from './Title.styles';

export default function Title() {
  const { selectedUser, setSelectedUser } = useData();

  return (
    <S.Container>
      <button type="button" onClick={() => setSelectedUser(undefined)}>
        {selectedUser && (
          <S.Arrow>
            <IoIosArrowBack />
          </S.Arrow>
        )}

        <S.Text>
          todo.
          <span>{selectedUser ? selectedUser?.name.replace(' ', '') : 'users'}</span>
        </S.Text>
      </button>
    </S.Container>
  );
}
