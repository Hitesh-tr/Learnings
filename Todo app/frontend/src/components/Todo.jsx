import React from 'react';

export function GetTodos({ todos, markAsCompleted }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo._id} className="todo-item">
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => markAsCompleted(todo._id)} 
          />
          <div className={todo.completed ? 'completed' : ''}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
