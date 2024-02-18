// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({backgroundColor}) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${backgroundColor}`}>
      <div className="container-fluid">
        <div className="navbar-brand">Liran Bashari</div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link pe-4" activeclassname="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pe-4" activeclassname="active" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pe-4" activeclassname="active" to="/resume">Resume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pe-4" activeclassname="active" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
