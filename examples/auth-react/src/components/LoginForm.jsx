import { useNavigate } from 'react-router-dom'

import { login } from '../services/auth'

const LoginForm = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = e.target

    try {
      const { token, profile } = await login(email.value, password.value)

      localStorage.setItem('token', token)

      // Redirect to profile page
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
