import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  // TODO: Usar este llamado dentro del useEffect solo la primera vez que se renderiza el componente
  // fetch('https://rickandmortyapi.com/api/character/')
  //     .then(response => response.json())
  //     .then(data => {
  //       // your code here
  //     });

  return (
    <div className="Characters">
      {characters.map(character => (
        <Link to={`/character/${character.id}`}>
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Characters;
