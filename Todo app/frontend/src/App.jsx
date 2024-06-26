import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todo';

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

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
