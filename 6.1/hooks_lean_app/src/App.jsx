import React, { Fragment, useState } from "react"

function App() {

  return (
    <Fragment>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Extra title 1" ></Header>
      <Header title="Extra title 2" ></Header>
      <Header title="Extra title 3" ></Header>
    </Fragment>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Hitesh")

  function updateTitle(){
    setTitle("My name is "+ Math.random())
  }

  return <div>
    <Header title="Hi"></Header>
    <button onClick={updateTitle}>Update the Title</button>
     <Header title={title}></Header>
  </div>
  
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
