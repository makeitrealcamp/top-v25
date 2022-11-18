import { Link } from 'react-router-dom';

const List = () => {
  return(
    <div>
      <ul>
        <li>
          <div>
            <p><strong>Nombre:</strong> Cristian</p>
            <p><strong>Email:</strong> k@m.co</p>
            <p><strong>Role:</strong> admin</p>
            <Link to="/detail/1">Ver detalle</Link>
          </div>
        </li>
        <li>
          <div>
            <p><strong>Nombre:</strong> Cristian</p>
            <p><strong>Email:</strong> k@m.co</p>
            <p><strong>Role:</strong> admin</p>
            <Link to="/detail/1">Ver detalle</Link>
          </div>
        </li>
        <li>
          <div>
            <p><strong>Nombre:</strong> Cristian</p>
            <p><strong>Email:</strong> k@m.co</p>
            <p><strong>Role:</strong> admin</p>
            <Link to="/detail/1">Ver detalle</Link>
          </div>
        </li>
        <li>
          <div>
            <p><strong>Nombre:</strong> Cristian</p>
            <p><strong>Email:</strong> k@m.co</p>
            <p><strong>Role:</strong> admin</p>
            <Link to="/detail/1">Ver detalle</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default List
