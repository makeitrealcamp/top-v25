import PropTypes from 'prop-types';

import Candidate from "./Candidate";

const Candidates = (props) => {
  return (
    <div className="candidates-list">
      <Candidate />
      <Candidate />
      <Candidate />
      <Candidate />
    </div>
  );
}

Candidates.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onHandleVote: PropTypes.func.isRequired
}

export default Candidates;
