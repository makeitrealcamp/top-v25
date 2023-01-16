import { Link } from 'react-router-dom'

const Navbar = () => {
  const token = localStorage.getItem('token');
  console.log("🚀 ~ file: App.jsx:12 ~ App ~ token", token)

  return(
    <nav>
      <h2>logo</h2>
      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        {
          token && <li><Link to="/profile">Profile</Link></li>
        }
      </ul>
    </nav>
  )
}

export default Navbar
