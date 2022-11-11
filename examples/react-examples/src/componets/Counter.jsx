import { useState } from 'react'


function Counter() {
  const [count, setCount]  = useState()

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleClickDecrement = () => {
    setCount(count - 1)
  }


  return (
    <>
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
    </>
  )
}

export default Counter
