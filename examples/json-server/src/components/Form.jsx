import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useForm from '../hooks/useForm'
import { createUser, updateUser } from '../services/users'

const Form = ({ user = null }) => {
  const {form, handleChange} = useForm({})

  const navigate = useNavigate()

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    try {
      if(user) {
        // Update
        await updateUser(form)
      } else {
        // Create
        await createUser(form)
      }

      // navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          defaultValue={user?.name}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          defaultValue={user?.email}
        />
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
        <button type="submit">
          { user ? 'Update' : 'Create' }
        </button>
      </div>
    </form>
  )
}

export default Form
