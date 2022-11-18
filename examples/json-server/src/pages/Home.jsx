import { useState, useEffect } from 'react'

import List from '../components/List';
import { getAllUsers } from '../services/users'

const HomePage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async() => {
      try {
        const data = await getAllUsers()
        setUsers(data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  return(
    <div>
      <h1>Lista de usuarios</h1>
      <List users={users} />
    </div>
  )
}

export default HomePage
