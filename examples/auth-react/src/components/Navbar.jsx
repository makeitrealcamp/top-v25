import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"

import { selectAuth, logout } from "../features/auth/authSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth } = useSelector(selectAuth)

  const handleLogout = () => {
    localStorage.removeItem('auth')
    dispatch(logout())

    navigate('/')
  }

  return(
    <nav>
      <h2>logo</h2>
      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        {
          !isAuth
            ? <li><Link to="/login">Login</Link></li>
            : <li><button onClick={handleLogout}>Logout</button></li>
        }
        {
          isAuth && <li><Link to="/profile">Profile</Link></li>
        }
      </ul>
    </nav>
  )
}

export default Navbar
