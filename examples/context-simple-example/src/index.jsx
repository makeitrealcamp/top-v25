import React from 'react';
import ReactDOM from 'react-dom/client';

// 6. Importar el Provider
import { ProviderCounter } from './components/NumberContext';
import { ThemeProvider } from './components/ThemeContext'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 6. Envolver los componentes dentro del Provider */}
    <ThemeProvider>
      <ProviderCounter>
        <App />
      </ProviderCounter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
