import { useTheme } from './ThemeContext'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return(
    <button onClick={handleClick}>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  )
}

export default ToggleTheme
