import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUser } from '../services/users'

const DetailPage = () => {
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
      {
        user
          ? (
            <>
              <h1>{user.name}</h1>
              <pre>
                {JSON.stringify(user, null, 2)}
              </pre>
            </>
          )
          : <p>Cargando...</p>
      }
    </div>
  )
}

export default DetailPage
