import { useState } from 'react';

import ChoosePokemon from './components/ChoosePokemon';
import List from './components/List';

import { randomPokemon } from './utils/randomPokemon';

import './App.css';


function App() {
  const [pokemons, setPokemons] = useState([randomPokemon()]);

  const addPokemon = () => {
    const newPokemon = randomPokemon();
    // Your code here
    // Choose only 5 pokemons

    if(pokemons.length < 5){
      setPokemons(pokemons.concat(newPokemon))
    } else {
      // asignele a la variable de estado que oculte el boton
      alert("Ya no puedes agregar mas")
    }
  }

  return (
    <div className="App-header">
      <h1>Your Pokemons</h1>
      <ChoosePokemon addPokemon={addPokemon} />
      <List pokemons={pokemons} />
    </div>
  );
}

export default App;
