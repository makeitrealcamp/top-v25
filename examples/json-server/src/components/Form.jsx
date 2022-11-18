import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Form = () => {
  const [form, setForm] = useState({})

  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    const { value, name } = target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    }

    try {
      const resp = await fetch('http://localhost:8080/api/users', payload)
      const data = await resp.json()
      console.log("🚀 ~ file: Form.jsx ~ line 29 ~ handleSubmit ~ data", data)
      navigate('/')
    } catch (error) {
      console.error(error)
    }

    // fetch('http://localhost:8080/api/users', payload)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     console.log("🚀 ~ file: Form.jsx ~ line 29 ~ handleSubmit ~ data", data)
    //     navigate('/')
    //   })
    //   .catch(console.error)
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter name" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter email" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" onChange={handleChange}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <div>
        <button type="submit">Crear</button>
      </div>
    </form>
  )
}

export default Form
