import React from 'react';
import '../styles/SideBar.css';
import logo from '../assets/logo.png';
import { FaHome, FaFilm, FaUtensils, FaStar, FaInstagram, FaFacebook } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Cine Logo" className="sidebar-logo" />
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <FaHome />
            <span>&nbsp;Home</span>
          </li>
          <li>
            <FaFilm />
            <span>&nbsp;Cartelera</span>
          </li>
          <li>
            <FaUtensils />
            <span>&nbsp;Chucherías</span>
          </li>
          <li>
            <FaStar />
            <span>&nbsp;Próximos Estrenos</span>
          </li>
          {/* Redes sociales */}
          <li>
            <FaInstagram />
            <span>&nbsp;Instagram</span>
          </li>
          <li>
            <FaFacebook />
            <span>&nbsp;Facebook</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;