import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20){
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
  }

  // interview based question 
  // if we did this then what will hapen 
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1) ---> this will return the just next value

  // if we wnat to retun next 3 values then we will do this 
  // setCounter(counter => counter + 1)
  // setCounter(counter => counter + 1)
  // setCounter(counter => counter + 1) ---> this will return the next 3 values

  return (
    <div className="app">
      <h2>☕ Chai aur React | Project 01</h2>
      <h3>Counter Value: <span>{counter}</span></h3>

      <div className="buttons">
        <button onClick={addValue} disabled={counter === 20}>
          ➕ Add
        </button>
~
        <button onClick={removeValue} disabled={counter === 0}>
          ➖ Remove
        </button>
      </div>
    </div>
  )
}

export default App
