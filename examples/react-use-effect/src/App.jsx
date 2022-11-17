import { Routes, Route } from "react-router-dom";

import HomePage from './pages/Home';
import CharacterPage from './pages/Character';

import './App.css';

function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
