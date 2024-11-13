import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
  useEffect(() => {
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav); // Inicializa o sidenav do Materialize
  }, []);

  return (
    <>
      <ul id="menu" className="sidenav">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/clients" className={({ isActive }) => (isActive ? 'active' : '')}>
            Clientes
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            Produtos
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Menu;
