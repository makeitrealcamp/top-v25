import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {
          isAuthenticated
            ? (
              <>
                <p>Authenticated</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <div>
                  <img src={user.picture} alt={user.name} />
                </div>
                <button onClick={logout}>
                  Logout
                </button>
              </>
            )
            : (
              <div>
                <button onClick={() => {loginWithRedirect({ connection: 'Username-Password-Authentication' })}}>
                  Login default auth0
                </button>
                <button onClick={() => {loginWithRedirect({ connection: 'google-oauth2' })}}>
                  Login Google
                </button>
                <button onClick={() => {loginWithRedirect({ connection: 'facebook' })}}>
                  Login Facebook
                </button>
              </div>
            )
        }

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
