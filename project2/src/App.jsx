import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)   // for UI upadte

  // or

  // let counter = 15

  const addvalue = () => {


    if (counter < 20) {
      //  counter = counter + 1
      setCounter(counter + 1)

    }


  }
  const removeValue = () => {


    if (counter > 0) {
      setCounter(counter - 1)

    }
  }

  return (
    <>
      <div class="rt">
        <h1 className="blue-gradient">Vivek with React</h1>
        <h2>Counter Value:  {counter}</h2>
        <br />
        <br />
        <button class="add" onClick={addvalue}>Add Value </button>
        <br />
        <button class="remv" onClick={removeValue}>Remove Value</button>
      </div>

    </>
  )
}

export default App
