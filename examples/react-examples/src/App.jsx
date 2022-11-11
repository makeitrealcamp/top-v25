import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount]  = useState(0)
  const [name, setName] = useState('khriztianmoreno')


  const handleClick = () => {
    setCount(count + 1)
  }

  const handleClickDecrement = () => {
    setCount(count - 1)
  }


  return (
    <div className="App">
      <div id="container">hola</div>
      <h1>Counter: {count}</h1>
      {
        count === 5
          ? <p>Hemos llegado a 5 clicks</p>
          : <p>Aun no llegamos a 5</p>
      }

      <button onClick={handleClick}>
        Increment
      </button>
      <button onClick={handleClickDecrement}>
        Decreiment
      </button>
    </div>
  )
}

export default App
