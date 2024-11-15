import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Products from './pages/Produtos';
import SelectedClients from './pages/SelectedClients';

import Header from './components/Header/Header';
import Sidenav from './components/sidenav/Sidenav';
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
  const showHeaderAndMenu = location.pathname !== '/'; 

  return (
    <>
      {showHeaderAndMenu && <Header />}
      {showHeaderAndMenu && <Sidenav />}
      <main className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products" element={<Products />} />
          <Route path="/selected-clients" element={<SelectedClients />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
