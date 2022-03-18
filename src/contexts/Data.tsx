// Libs
import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

// Types
import { Todo } from '../types/todoTypes';
import { User } from '../types/userTypes';

type ContextValue = {
  users: User[];
  selectedUser: User | undefined;
  setSelectedUser: Dispatch<React.SetStateAction<User | undefined>>;
  selectedUserTodos: Todo[];
  setSelectedUserTodos: Dispatch<SetStateAction<Todo[]>>;
  getSelectedUser(user: User): void;
};

const DataContext = createContext<ContextValue | undefined>(undefined);

type DataProviderProps = {
  children: ReactNode;
};

const API_BASE = 'https://jsonplaceholder.typicode.com/';

export function DataProvider(props: DataProviderProps) {
  const { children } = props;
  const [users, setUsers] = useState<User[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [selectedUserTodos, setSelectedUserTodos] = useState<Todo[]>([]);

  function getUsers() {
    fetch(`${API_BASE}users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }

  function getTodos() {
    fetch(`${API_BASE}todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }

  function getSelectedUser(user: User) {
    setSelectedUser(user);
    const userTodos = todos.filter((todo) => todo.userId === user.id);
    setSelectedUserTodos(userTodos);
  }

  useEffect(() => {
    getUsers();
    getTodos();
  }, []);

  const value = {
    users,
    selectedUser,
    setSelectedUser,
    selectedUserTodos,
    setSelectedUserTodos,
    getSelectedUser,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);

  if (typeof context === 'undefined') {
    throw new Error('useData must be used within DataContext');
  }

  return context;
}
