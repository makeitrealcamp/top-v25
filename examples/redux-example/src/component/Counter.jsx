import { useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleReset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <div>
      <button onClick={handleIncrement}>+ 1</button>
      <button onClick={handleDecrement}>- 1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter
