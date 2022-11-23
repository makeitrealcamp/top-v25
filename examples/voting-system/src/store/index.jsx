// 1. importar el createContext
import { createContext, useContext, useReducer } from 'react';

import reducer from './reducer';

// 2. crear el contexto
const CandidatesAppContext = createContext();

const initialState = {
  candidates: [
    { id: 1, name: 'Sally Student', votes: 0 },
    { id: 2, name: 'Billy Bob', votes: 0 },
    { id: 3, name: 'Joey Jojo', votes: 0 },
    { id: 4, name: 'Anna Anxious', votes: 0 },
  ],
  showResultType: 'total',
  total: 0,
};

// 4. crear el Provider asociado al contexto
export const CandidatesAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer , initialState);

  const store = {
    state,
    dispatch
  };

  return (
    <CandidatesAppContext.Provider value={store}>
      {children}
    </CandidatesAppContext.Provider>
  );
};

// 5. crear el hook para usar el contexto -> Consumer
export const useCandidatesAppContext = () => {
  const context = useContext(CandidatesAppContext);

  if (!context) {
    throw new Error('useCandidatesAppContext must be used within a CandidatesAppProvider');
  }

  return context;
}

// 3. Exportar el contexto
export default CandidatesAppContext;
