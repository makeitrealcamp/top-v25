import PropTypes from 'prop-types'

const ChoosePokemon = (props) => {
  const { addPokemon } = props;
  return(
    <div>
      <button onClick={addPokemon}>
        Add Random Pokemon
      </button>
    </div>
  )
}

ChoosePokemon.propTypes = {
  addPokemon: PropTypes.func.isRequired,
}

export default ChoosePokemon
