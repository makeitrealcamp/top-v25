import PropTypes from 'prop-types';

const TotalVotes = (props) => {
  return(
    <div className="total">
      {/* Your code here */}
      Total Votes:<strong> 0</strong>
    </div>
  )
}

TotalVotes.propTypes = {
  totalVotes: PropTypes.number.isRequired
}

export default TotalVotes
