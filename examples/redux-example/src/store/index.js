// 1. Importar el paquete para crear el store
import { createStore } from 'redux';

const initialState = {
  count: 0
}

// 2. Crearte el reducer
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    case 'RESET':
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }
};

// 3. crear la store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// 5. Crear y exportar las acciones
// Action Creators


// 4. Exportar la store
export default store;
