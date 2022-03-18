// Libs
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Images
import { BsPlusLg } from 'react-icons/bs';
import { MdAddTask, MdTaskAlt } from 'react-icons/md';

// Contexts
import { useData } from '../../contexts/Data';

// Types
import { Todo } from '../../types/todoTypes';

// Styles
import * as S from './TodoList.styles';

export default function TodoList() {
  const { selectedUser, selectedUserTodos, setSelectedUserTodos } = useData();
  const [newTodoTitle, setNewTodoTitle] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTodoTitle(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (selectedUser) {
      const newTodo: Todo = {
        userId: selectedUser.id,
        id: selectedUserTodos.length + 1,
        title: newTodoTitle,
        completed: false,
      };

      const newSelectedUserTodos = [newTodo, ...selectedUserTodos];
      setSelectedUserTodos(newSelectedUserTodos);
      setNewTodoTitle('');
    }
  }

  function removeTodo(id: string) {
    const newSelectedUserTodos = selectedUserTodos.filter((todo) => todo.id.toString() !== id);
    setSelectedUserTodos(newSelectedUserTodos);
  }

  function checkTodo(id: string) {
    const todos = document.querySelectorAll('.todo') as NodeListOf<HTMLLIElement>;

    todos.forEach((todo) => {
      if (todo.id === id) {
        const selectedTodoElmt = todo;
        selectedTodoElmt.classList.toggle('checked');
      }
    });
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            id="todo"
            placeholder="Ex.: Clean House"
            value={newTodoTitle}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">
          <MdAddTask />
        </button>
      </S.Form>

      <S.List>
        <ul>
          {selectedUserTodos.map((todo) => (
            <li key={todo.id} id={todo.id.toString()} className="todo">
              <div>{todo.title}</div>

              <S.Buttons>
                <button
                  type="button"
                  className="remove"
                  onClick={() => removeTodo(todo.id.toString())}
                >
                  <BsPlusLg />
                </button>

                <button
                  type="button"
                  className="check"
                  onClick={() => checkTodo(todo.id.toString())}
                >
                  <MdTaskAlt />
                </button>
              </S.Buttons>
            </li>
          ))}
        </ul>
      </S.List>
    </S.Container>
  );
}
