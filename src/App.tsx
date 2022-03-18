import React from 'react';

// Components
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import UserList from './components/UserList/UserList';
import TodoList from './components/TodoList/TodoList';

// Contexts
import { useData } from './contexts/Data';

// Styles
import { GlobalStyles } from './helpers/styles/GlobalStyles';

function App() {
  const { selectedUser } = useData();

  return (
    <>
      <GlobalStyles />
      <Header />

      <main>
        <Title />
        {selectedUser ? <TodoList /> : <UserList />}
      </main>
    </>
  );
}

export default App;
