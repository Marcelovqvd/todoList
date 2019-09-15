import React from 'react';

export default function TodoItem({ newTodo, onDelete }) {
  return (
    <li>
      {newTodo}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  )
}