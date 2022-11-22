
import ToggleTheme from './components/ToggleTheme'
import Counter from './components/Counter'
import Text from './components/Text'

import { useTheme } from './components/ThemeContext'

import './App.css';

function App() {
  const { theme } = useTheme()

  const classTheme = theme === 'light' ? 'App-header-light' : 'App-header-dark';

  return (
    <div className={classTheme}>
      <ToggleTheme />
      <Counter />
      <Text />
    </div>
  );
}

export default App;
