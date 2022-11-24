import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Importar el paquete para conectar react con redux
import { Provider } from 'react-redux';

// 2. Importar la store
import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3. Envolver el arbol de react con el provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
