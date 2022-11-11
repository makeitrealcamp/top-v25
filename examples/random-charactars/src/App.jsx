import { useState } from 'react';

import ChoosePokemon from './components/ChoosePokemon';
import List from './components/List';

import { randomPokemon } from './utils/randomPokemon';

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const addPokemon = () => {
    const newPokemon = randomPokemon();
    // Your code here
    // Choose only 5 pokemons


  }

  return (
    <div className="App-header">
      <h1>Your Pokemons</h1>
      <ChoosePokemon  />
      <List  />
    </div>
  );
}

export default App;
