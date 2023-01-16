import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginActionAsync } from '../features/auth/authSlice'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = e.target

    try {
      const action = loginActionAsync({email: email.value, password: password.value})
      const { payload } = await dispatch(action)

      localStorage.setItem('auth', JSON.stringify(payload))

      // Redirect to home
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
