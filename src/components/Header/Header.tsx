import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = localStorage.getItem('userName') || 'Visitante';

  const clienteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="icon">
      <path d="M10 2.625C7.8167 2.625 6.0417 4.4 6.0417 6.58333C6.0417 8.725 7.7167 10.4583 9.90003 10.5333C9.9667 10.525 10.0334 10.525 10.0834 10.5333C10.1 10.5333 10.1084 10.5333 10.125 10.5333C10.1334 10.5333 10.1334 10.5333 10.1417 10.5333C12.275 10.4583 13.95 8.725 13.9584 6.58333C13.9584 4.4 12.1834 2.625 10 2.625Z" />
      <path d="M14.2334 12.75C11.9084 11.2 8.1167 11.2 5.77503 12.75C4.7167 13.4583 4.13336 14.4167 4.13336 15.4417C4.13336 16.4667 4.7167 17.4167 5.7667 18.1167C6.93336 18.9 8.4667 19.2917 10 19.2917C11.5334 19.2917 13.0667 18.9 14.2334 18.1167C15.2834 17.4083 15.8667 16.4583 15.8667 15.425C15.8584 14.4 15.2834 13.45 14.2334 12.75Z" />
    </svg>
  );
  const selectedClienteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
      viewBox="0 0 512 512" >
      <g>
        <path d="M182.9,0c-70.5,0-128,57.5-128,128c0,44.1,22.5,83.2,56.6,106.3C46.2,262.3,0,327,0,402.3h36.6
		c0-81,65.3-146.3,146.3-146.3c25.1,0,48.6,6.6,69.1,17.7c-20.3,25.1-32.6,57.3-32.6,92c0,80.6,65.7,146.3,146.3,146.3
		S512,446.3,512,365.7s-65.7-146.3-146.3-146.3c-31.9,0-61.6,10.5-85.7,28c-8.1-5.1-16.9-9.4-25.7-13.1
		c34.1-23.1,56.6-62.2,56.6-106.3C310.9,57.5,253.4,0,182.9,0z M182.9,36.6c50.7,0,91.4,40.7,91.4,91.4s-40.7,91.4-91.4,91.4
		S91.4,178.7,91.4,128S132.1,36.6,182.9,36.6z M365.7,256c60.8,0,109.7,48.9,109.7,109.7s-48.9,109.7-109.7,109.7
		S256,426.5,256,365.7S304.9,256,365.7,256z M425.7,316l-60,60L324,334.3l-26.3,26.3l54.9,54.9l13.1,12.6l13.1-12.6l73.1-73.1
		L425.7,316z"/>
      </g>
    </svg>
  );
  const menuItems = [
    { name: 'Clientes', path: '/clients', icon: clienteIcon },
    { name: 'Clientes Selecionados', path: '/selected-clients', icon: selectedClienteIcon },
    { name: 'Sair', path: '/', icon: clienteIcon },
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
            disabled={location.pathname === item.path}
          >
            <item.icon className="sidenav-icon" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="right hide-on-small-only">
        <span>Olá, <b>{userName}</b></span>
      </div>
    </header>
  );
};

export default Header;
