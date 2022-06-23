import React from 'react';

export default function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo,
  selectTodo,
}) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${
        todo.selected ? 'selected' : ''
      }  `}
    >
      <span className="flex-fill">
        {todo.content} {todo.done && '✅'}
      </span>
      <button className="btn btn-primary mr-15" onClick={toggleTodo}>
        Valider
      </button>
      <button className="btn btn-primary mr-15" onClick={editTodo}>
        Modifier
      </button>
      <button className="btn btn-reverse-primary" onClick={deleteTodo}>
        Supprimer
      </button>
    </li>
  );
}
