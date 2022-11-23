import { useCandidatesAppContext } from '../store'

const TotalVotes = () => {
  const { state, dispatch } = useCandidatesAppContext()
  // { state, dispatch }
  //  { state: { candidates: [], showResultType: 'total', total: 0 }, dispatch: function }

  return(
    <div className="total">
      {/* Your code here */}
      Total Votes:<strong> {state.total}</strong>
    </div>
  )
}

export default TotalVotes
