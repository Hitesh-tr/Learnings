import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { GetTodos } from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/gettodos")
      .then(async res => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []); 

  const markAsCompleted = (id) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(async function(res) {
        const json = await res.json();
        setTodos(todos.map(todo => todo._id === id ? { ...todo, completed: true } : todo));
      })
      .catch(error => {
        console.error('Error marking todo as completed:', error);
      });
  };

  return (
    <div className="app-container">
      <CreateTodo />
      <GetTodos todos={todos} markAsCompleted={markAsCompleted} />
    </div>
  );
}

export default App;
