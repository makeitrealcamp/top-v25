import LoginForm from './componets/LoginForm'
import ListUsers from './componets/ListUsers'

import './App.css'

function App() {


  return (
    <div className="App">
      <div className="login">
        <LoginForm />
      </div>
      <div className="users">
        <ListUsers />
      </div>
    </div>
  )

  //
}

export default App
