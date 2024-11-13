import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Products from './pages/Products';
import Header from './components/Header';
import Menu from './components/Menu';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const showHeaderAndMenu = location.pathname !== '/'; // Não exibir Header e Menu na página inicial

  return (
    <>
      {showHeaderAndMenu && <Header />}
      {showHeaderAndMenu && <Menu />}
      <main className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
