import PropTypes from 'prop-types'

const Candidate = (props) => {
  return(
    <div className="candidate">
      {/* Your code here */}
    </div>
  )
}

Candidate.propTypes = {
  name: PropTypes.string.isRequired,
  onHandleVote: PropTypes.func.isRequired
}

export default Candidate
