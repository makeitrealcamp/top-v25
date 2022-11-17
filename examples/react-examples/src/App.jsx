import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people')
        const data = await response.json()
        setResult(data.results)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()

  }, [])


  return (
    <div className="App">
      <h1>{count}</h1>

      <ul>
        {
          result.length
            ? result.map((item) => <li key={item.id}>{item.name}</li>)
            : <li>loading...</li>
        }
      </ul>

      <button onClick={() => { setCount(count + 1) }}>+1</button>
    </div>
  )

  //
}

export default App
