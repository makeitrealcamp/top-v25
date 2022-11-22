// 5. Consumir el Contexto
import { useCounter } from './NumberContext'

const Text = () => {
  const { value } = useCounter()
  return(
    <h1>
      El valor del counter es {value}
    </h1>
  )
}

export default Text
