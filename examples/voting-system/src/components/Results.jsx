import { useCandidatesAppContext } from '../store'

const Results = () => {
  const { state } = useCandidatesAppContext();
  const { candidates, resultType, total } = state;

  return (
    <div className="results">
      <ul>
        {
          candidates.map((candidate, idx) => {
            return (
              <li key={candidate.id}>
                <span>{candidate.name}: </span> <strong>{candidate.votes}</strong>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}


export default Results;
