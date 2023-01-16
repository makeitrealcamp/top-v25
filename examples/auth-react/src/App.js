import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import useLocalStorage from './hooks/useLocalStorage';
import RequireAuth from './features/auth/RequireAuth';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import UnauthorizedPage from './pages/Unauthorized';

import { selectAuth, setAuthUser } from './features/auth/authSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const [storedValue] = useLocalStorage('auth');
  const {isAuth} = useSelector(selectAuth);

  useEffect(() => {
    if (!isAuth && storedValue) {
      dispatch(setAuthUser(storedValue));
    }
  }, [storedValue, isAuth, dispatch]);

  return (
    <div className="App-header">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          {/* Protected Route */}
          <Route
            path="profile"
            element={
              <RequireAuth roles={["ADMIN"]}>
                <ProfilePage />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
