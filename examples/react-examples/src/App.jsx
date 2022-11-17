import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState([])

  useEffect(() => {
    console.log('useEffect')
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setResult(data.results)
      })
  }, [])


  return (
    <div className="App">
      <h1>{count}</h1>

      <ul>
        {
          result.map((item) => {
            return (
              <li key={item.id}>{item.name}</li>
            )
          })
        }
      </ul>

      <button onClick={() => { setCount(count + 1) }}>+1</button>
    </div>
  )

  //
}

export default App
