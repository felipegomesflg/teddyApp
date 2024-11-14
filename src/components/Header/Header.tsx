import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = localStorage.getItem('userName') || 'Visitante';

  const menuItems = [
    { name: 'Clientes', path: '/clients' },
    { name: 'Clientes Selecionados', path: '/selected-clients' },
    { name: 'Sair', path: '/' },
  ];


  return (
    <header className="navbar">
      <a href="#" className="sidenav-trigger" data-target="menu">
        <i className="material-icons">menu</i>
      </a>
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => location.pathname !== item.path && navigate(item.path)}
            disabled={location.pathname === item.path} // Desativa a opção ativa
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="right">
        <span>Olá, <b>{userName}</b></span>
      </div>
    </header>
  );
};

export default Header;
