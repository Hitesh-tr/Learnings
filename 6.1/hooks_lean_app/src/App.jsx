import React, { Fragment, useState } from "react"

function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    title: "Wake up at 6AM",
    desc:"wakeup at 6AM and go to gym"
  },
  {
    id: 2,
    title: "Study",
    desc:"wakeup at 6AM and go to gym and study"
  },
  {
    id: 3,
    title: "Code",
    desc:"wakeup at 6AM and go to gym and study and the COde React"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: todos.length + 1,
      title: Math.random(),
      desc: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} desc={todo.desc} />
      ))}
    </div>
  )
}

//Key to identify each element in the array - removes error key={todo.id} => id: 3,

function Todo({title, desc}){
  return <div>
    <input type="checkbox"></input>
    <h5>{title}</h5>
    <p>{desc}</p>
  </div>
}
export default App
