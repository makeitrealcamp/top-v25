// 1. Importar el createContext
import { createContext, useState, useContext } from 'react'

// 2. Crear el contexto
const ThemeContext = createContext()

// 4. Crear el provider del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  // useReducer

  const store = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={store}>
      {children}
    </ThemeContext.Provider>
  )
}

// 5. Crear el consumer del contexto -> customHook use_____
export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used whitin a ThemeProvider')
  }

  return context
}

// 3. Exportar el Contexto
export default ThemeContext
