import React, { Fragment, useState } from "react"

function App() {

  const [title, setTitle] = useState("My name is Hitesh")

  function updateTitle(){
    setTitle("My name is "+ Math.random())
  }

  return (
    <>
      <button onClick={updateTitle}>Update the Title</button>
      <Header title={title}></Header>

      <Header title="Hi"></Header>
      <Header title="Hi"></Header>
      <Header title="Hi"></Header>
      <Header title="Hi"></Header>
    </>
  )
}

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
