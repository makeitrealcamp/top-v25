import { useCandidatesAppContext } from '../store'
import { INCREMENT } from '../store/actionsTypes'

const Candidate = ({ candidate }) => {
  const {dispatch} = useCandidatesAppContext()

  const handleClickVote = (id) => {
    console.log(id)
    dispatch({ type: INCREMENT, payload: id })
  }

  return(
    <div className="candidate">
      <button
        type="button"
        onClick={() => handleClickVote(candidate.id)}
      >
        {candidate.name}
      </button>
    </div>
  )
}



export default Candidate
