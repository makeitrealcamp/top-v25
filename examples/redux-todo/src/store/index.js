import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import todoReducer from './reducer';

const composeEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  todoReducer,
  composeEnhancers
);

export default store;
