import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProductPage from './pages/Product';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App-header">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>


      {/* Footer */}
    </div>
  );
}

export default App;
