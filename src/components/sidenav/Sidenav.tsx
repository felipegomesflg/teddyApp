import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidenav.css';

const clientsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="icon">
        <path d="M10 2.625C7.8167 2.625 6.0417 4.4 6.0417 6.58333C6.0417 8.725 7.7167 10.4583 9.90003 10.5333C9.9667 10.525 10.0334 10.525 10.0834 10.5333C10.1 10.5333 10.1084 10.5333 10.125 10.5333C10.1334 10.5333 10.1334 10.5333 10.1417 10.5333C12.275 10.4583 13.95 8.725 13.9584 6.58333C13.9584 4.4 12.1834 2.625 10 2.625Z" />
        <path d="M14.2334 12.75C11.9084 11.2 8.1167 11.2 5.77503 12.75C4.7167 13.4583 4.13336 14.4167 4.13336 15.4417C4.13336 16.4667 4.7167 17.4167 5.7667 18.1167C6.93336 18.9 8.4667 19.2917 10 19.2917C11.5334 19.2917 13.0667 18.9 14.2334 18.1167C15.2834 17.4083 15.8667 16.4583 15.8667 15.425C15.8584 14.4 15.2834 13.45 14.2334 12.75Z" />
    </svg>

);

const productIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3334 6.01732V2.23398C17.3334 1.05898 16.8 0.583984 15.475 0.583984H12.1084C10.7834 0.583984 10.25 1.05898 10.25 2.23398V6.00899C10.25 7.19232 10.7834 7.65898 12.1084 7.65898H15.475C16.8 7.66732 17.3334 7.19232 17.3334 6.01732Z" />
        <path d="M17.3334 15.3923V12.0257C17.3334 10.7007 16.8 10.1673 15.475 10.1673H12.1084C10.7834 10.1673 10.25 10.7007 10.25 12.0257V15.3923C10.25 16.7173 10.7834 17.2507 12.1084 17.2507H15.475C16.8 17.2507 17.3334 16.7173 17.3334 15.3923Z" />
        <path d="M7.75002 6.01732V2.23398C7.75002 1.05898 7.21669 0.583984 5.89169 0.583984H2.52502C1.20002 0.583984 0.666687 1.05898 0.666687 2.23398V6.00899C0.666687 7.19232 1.20002 7.65898 2.52502 7.65898H5.89169C7.21669 7.66732 7.75002 7.19232 7.75002 6.01732Z" />
        <path d="M7.75002 15.3923V12.0257C7.75002 10.7007 7.21669 10.1673 5.89169 10.1673H2.52502C1.20002 10.1673 0.666687 10.7007 0.666687 12.0257V15.3923C0.666687 16.7173 1.20002 17.2507 2.52502 17.2507H5.89169C7.21669 17.2507 7.75002 16.7173 7.75002 15.3923Z" />
    </svg>

);

const homeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3583 6.67485L11.9 2.30819C10.8333 1.45819 9.16666 1.44985 8.10832 2.29985L2.64999 6.67485C1.86666 7.29985 1.39166 8.54985 1.55832 9.53319L2.60832 15.8165C2.84999 17.2249 4.15832 18.3332 5.58332 18.3332H14.4167C15.825 18.3332 17.1583 17.1999 17.4 15.8082L18.45 9.52485C18.6 8.54985 18.125 7.29985 17.3583 6.67485ZM10.625 14.9999C10.625 15.3415 10.3417 15.6249 9.99999 15.6249C9.65832 15.6249 9.37499 15.3415 9.37499 14.9999V12.4999C9.37499 12.1582 9.65832 11.8749 9.99999 11.8749C10.3417 11.8749 10.625 12.1582 10.625 12.4999V14.9999Z" />
    </svg>


);

const Sidenav: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav);
    }, []);

    const menuItems = [
        { name: 'Home', path: '/', icon: homeIcon },
        { name: 'Clientes', path: '/clients', icon: clientsIcon },
        { name: 'Produtos', path: '/products', icon: productIcon },
    ];

    return (
        <aside id="menu" className="sidenav">
            <div className="sidenav-content">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        className={`sidenav-item ${location.pathname === item.path ? 'active' : ''}`}
                        onClick={() => location.pathname !== item.path && navigate(item.path)}
                        disabled={location.pathname === item.path}
                    >
                        <item.icon className="sidenav-icon" />
                        {item.name}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default Sidenav;
