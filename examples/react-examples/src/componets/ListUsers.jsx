import { useState, useEffect } from "react"

const BASE_URL = "https://top-v25-backend-production.up.railway.app/api"

const ListUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const url = `${BASE_URL}/users`
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }


    getUsers()
  }, [])

  return(
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListUsers
