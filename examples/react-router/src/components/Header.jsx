import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to="/"> home </Link>
          </li>
          <li>
            <Link to="/about"> about </Link>
          </li>
          <li>
            <Link to="/contact"> contact </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
