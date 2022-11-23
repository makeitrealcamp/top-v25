import Candidate from "./Candidate";
import { useCandidatesAppContext } from "../store";


const Candidates = (props) => {
  const { state } = useCandidatesAppContext();
  return (
    <div className="candidates-list">
      {
        state.candidates.map((candidate, idx) => {
          return <Candidate key={candidate.id} candidate={candidate}/>
        })
      }
    </div>
  );
}

export default Candidates;
