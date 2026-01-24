import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 16

  const addValue = () => {
    console.log('clicked', counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h2>Chai aur react | project number 1</h2>
      <h3>Counter valur : {counter}</h3>

      <button onClick={addValue}>Add Value {counter}  </button>
      <br />
      <button onClick={removeValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
