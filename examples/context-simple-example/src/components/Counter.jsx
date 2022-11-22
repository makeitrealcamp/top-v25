import { useCounter } from './NumberContext'

const Counter = () => {
  const { value, handleCount } = useCounter()


  const handleIncrement = () => {
    handleCount(value + 1);
  }

  const handleDecrement = () => {
    handleCount(value - 1);
  }

  return(
    <div>
      <h1>El contador esta en {value}</h1>

      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  )
}

export default Counter
