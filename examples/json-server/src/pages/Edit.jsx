import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUser } from '../services/users'
import Form  from  '../components/Form';

const EditPage = (props) => {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUser(id)
        setUser(response) //asincrono
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [id])

  return(
    <div>
      <h1>Edit</h1>
      <Form user={user} />
    </div>
  )
}

export default EditPage
