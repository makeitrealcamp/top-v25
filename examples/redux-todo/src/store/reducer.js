import { ADD_TASK, SET_TASKS } from './types'

const initialState = {
  tasks: [],
  isLoading: false,
}

function todoReducer(state = initialState, action = {}) {
  const { tasks, isLoading } = state;
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK: {
      const newTasks = tasks.concat(payload)
      return { ...state, tasks : newTasks }
    }

    case SET_TASKS: {
      return { ...state, tasks: payload }
    }

    default: {
      return state;
    }
  }
}

export default todoReducer;

