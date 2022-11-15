import PropTypes from 'prop-types';

const Results = (props) => {
  return (
    <div className="results">
      {/* Your Code Here */}
      <ul>
        <li>
          <span>Candidate name: </span> <strong>0</strong>
        </li>
        <li>
          <span>Candidate name: </span> <strong>0</strong>
        </li>
      </ul>
    </div>
  );
}

Results.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  })).isRequired,
  showResultType: PropTypes.string.isRequired
}

export default Results;
