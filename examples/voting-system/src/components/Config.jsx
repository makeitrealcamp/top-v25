import PropTypes from 'prop-types';

const Config = (props) => {
  return (
    <div className="filters">
      <label htmlFor="percentage" className="filters__item">
        <input type="radio" name="percentage" id="percentage"  />
        <span>Percentage</span>
      </label>
      <label htmlFor="absolute" className="filters__item">
        <input type="radio" name="absolute" id="absolute"  />
        <span>Absolute</span>
      </label>
    </div>
  );
}

Config.propTypes = {
  onHandleFilter: PropTypes.func.isRequired
}

export default Config;
