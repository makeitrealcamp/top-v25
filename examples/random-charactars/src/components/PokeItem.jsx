import PropTypes from 'prop-types'

const PokeItem = ({ pokemon= {} }) => {
  const { name, image, height, weight } = pokemon

  return (
    <li class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="bulbasaur"
          />
          <h5 className="flip-card-back__title">bulbasaur</h5>
        </div>
        <div class="flip-card-back">
          <h2 className="flip-card-back__title">bulbasaur</h2>
          <p><strong>Weight:</strong> 69</p>
          <p><strong>Height:</strong> 7</p>
        </div>
      </div>
    </li>
  )
}

PokeItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    height: PropTypes.number,
    weight: PropTypes.number,
  }).isRequired,
}

export default PokeItem
