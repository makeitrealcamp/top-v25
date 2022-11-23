import { INCREMENT, RESULT_TYPE } from './actionsTypes'

// FSA -> FLUX STANDARD ACTION
// { type: 'INCREMENT', payload: 1, meta: { ... }, error: false }
// { type: 'SHOW_MODAL' } { type: 'HIDE_MODAL' } { type: 'IS_OPEN_MODAL', payload: false }

function reducer(state, action = {}) {
  switch (action.type) {
    case INCREMENT: {
      const newCandidates = state.candidates.map((candidate) => {
        if (candidate.id === action.payload) {
          return { ...candidate, votes: candidate.votes + 1 };
        } else {
          return candidate;
        }
      });

      const totalVotes = newCandidates.reduce((acumulador, actual) => {
        return (acumulador + actual.votes)
      }, 0)
      // acumulador = 0, actual = { id: 1, name: 'Pepe', votes: 1 }
      // acumulador = 1, actual = { id: 2, name: 'Juan', votes: 0 }
      // acumulador = 1, actual = { id: 3, name: 'Maria', votes: 5 }
      // acumulador = 6, actual = { id: 4, name: 'Luis', votes: 0 }

      return { ...state, candidates: newCandidates, total: totalVotes };
    }

    case RESULT_TYPE: {
      return {
        ...state,
        showResultType: action.payload // total - percentage
      }
    }

      default:
      return state;
  }
}

export default reducer;
