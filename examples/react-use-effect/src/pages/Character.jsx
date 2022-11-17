import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Character = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  // TODO: llamar a la api con el id del personaje
  // https://rickandmortyapi.com/api/character/1
  // para obtener la información del personaje y guardarla en el estado


  return (
    <div className="Character">
      <h2>Character {id}</h2>

      {/* Mostrar el nombre del personaje y la imagen */}
    </div>
  );
}

export default Character;
