import PropTypes from 'prop-types'

import PokeItem from './PokeItem'

const List = ({ pokemons = [] }) => {
  return(
    <div>
      <h3>List of pokemons</h3>
      <ul className='list-card'>
        {
          pokemons.length > 0
            ? pokemons.map(pokemon => {
              return <PokeItem pokemon={pokemon} key={pokemon.id} />
            })

            : <li>No hay datos</li>
        }
      </ul>
    </div>
  )
}

List.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    height: PropTypes.number,
    weight: PropTypes.number,
  })).isRequired,
}

export default List
