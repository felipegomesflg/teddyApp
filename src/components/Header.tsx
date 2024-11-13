import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Visitante';

  return (
    <header className="navbar">
      <a href="#" className="sidenav-trigger" data-target="menu">
        <i className="material-icons">menu</i>
      </a>
      <Link to="/" className="brand-logo">
        Logo
      </Link>
      <div className="breadcrumb">Home / Clientes</div>
      <div className="right">
        <span>Olá, {userName}</span>
      </div>
    </header>
  );
};

export default Header;
