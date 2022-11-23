import { useCandidatesAppContext } from '../store'
import { RESULT_TYPE } from '../store/actionsTypes'

const Config = () => {
  const { state, dispatch } = useCandidatesAppContext()

  const handleChange = ({ target }) => {
    const { value } = target;
    dispatch({type: RESULT_TYPE, payload: value})
  }

  return (
    <div className="filters">
      <label htmlFor="percentage" className="filters__item">
        <input
          type="radio"
          value="percentage"
          id="percentage"
          name="type"
          onChange={handleChange}
          // checked={state.resultType === 'percentage'}
        />
        <span>Percentage</span>
      </label>
      <label htmlFor="total" className="filters__item">
        <input
          type="radio"
          value="total"
          id="total"
          name="type"
          onChange={handleChange}
          // checked={state.resultType === 'total'}
        />
        <span>Total</span>
      </label>
    </div>
  );
}


export default Config;
