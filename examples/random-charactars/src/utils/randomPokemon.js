import data from '../assets/data.json';

export function randomPokemon() {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
}
