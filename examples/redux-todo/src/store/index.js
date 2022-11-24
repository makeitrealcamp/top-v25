import { createStore } from 'redux';

const initialState = {
  tasks: [
    { id: 1, name: 'Task 1', completed: false },
  ],
  isLoading: false,
}

function reducer(state = initialState, action = {}) {
  const { tasks, isLoading } = state;
  const { type, payload } = action;

  if (type === "NEW_TASK"){
    let newTasks = tasks.concat(payload)
    return { ...state, tasks : newTasks }
  }
  // NEW_TASK



  return state;
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
