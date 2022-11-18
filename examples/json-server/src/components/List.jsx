import { Link, useNavigate } from 'react-router-dom';

const List = ({ users }) => {
  const navigate = useNavigate()

  const handelClick = (id) => {
    navigate(`/edit/${id}`)
  }

  return(
    <div>
      <ul>
        {
          users.map((user) => {
            return (
              <li key={user.id}>
                <div>
                  <p><strong>Nombre:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Role:</strong> {user.role}</p>
                  <Link to={`/detail/${user.id}`}>Ver detalle</Link>
                  <button
                    onClick={() => { handelClick(user.id) }}
                  >
                    Editar
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List
