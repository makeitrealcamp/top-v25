import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import CreatePage from './pages/Create';
import DetailPage from './pages/Detail';

import './App.css';

const App = () =>{
  return (
    <div className="App-header">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
