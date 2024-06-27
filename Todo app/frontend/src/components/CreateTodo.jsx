import React, { useState } from 'react';

export function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    fetch("http://localhost:3000/addtodos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(async function(res) {
        const json = await res.json();
        alert("Todo added");
      })
      .catch(error => {
        console.error('Error adding todo:', error);
        alert('Failed to add todo');
      });
  };

  return (
    <div className="todo-form">
      <input
        className="input"
        id="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      /> <br />
      <input
        className="input"
        id="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      /> <br />
      <button className="button" onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
