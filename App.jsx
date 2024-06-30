import { useState } from 'react'

import './App.css'

function App() {
   let [count , setCount] = useState(1)
  // let count = 1
  let add =()=>{
    console.log("click",count)
   count = count + 1
   setCount(count)
  }
  const remove = ()=>{
    setCount(count - 1)

  }

  return (
    <>
    <h1>start  {count}</h1>
   <button
    onClick={add}>
    click here {count} </button>
    <br/>
   <button onClick={remove}>reverse {count}</button>
   <br/>
   <button>this is number: {count}</button>
    </>
  )
}

export default App
