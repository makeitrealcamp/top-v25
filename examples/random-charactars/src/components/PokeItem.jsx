import PropTypes from 'prop-types'

const PokeItem = ({ pokemon = {} }) => {
  const { name, image, height, weight } = pokemon

  return (
    <li className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={image}
            alt={name}
          />
          <h5 className="flip-card-back__title">{name}</h5>
        </div>
        <div className="flip-card-back">
          <h2 className="flip-card-back__title">{name}</h2>
          <p><strong>Weight:</strong> {weight}</p>
          <p><strong>Height:</strong> {height}</p>
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
