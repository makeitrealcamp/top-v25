// 1. import createContext
import { createContext, useState, useContext } from 'react'

// 2. crear el contexto
const ContextCounter = createContext()


// 4. Crear el provider
export const ProviderCounter = ({ children }) => {
  const [count, setCount] = useState(0)

  const store = {
    value: count,
    handleCount: setCount
  }

  return (
    <ContextCounter.Provider value={store}>
      {children}
    </ContextCounter.Provider>
  )
}

// 5. crear consumer
export const useCounter = () => {
  const context = useContext(ContextCounter)

  if (context === undefined) {
    throw new Error('useCounter must be used whitin a ProviderCounter')
  }

  return context
}

// 3. exportar el contexto
export default ContextCounter
