import { StatusBar } from 'expo-status-bar';

import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';

function App() {
  return (
    <>
      <Login />
      <StatusBar style="auto" />
    </>
  );
}

export default App;
