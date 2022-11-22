import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/Home';
import CreatePage from './pages/Create';
import DetailPage from './pages/Detail';
import EditPage from './pages/Edit';

import './App.css';

const App = () =>{
  return (
    <div className="App-header">
      <Link to="/create">Create</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
