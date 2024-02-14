// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">Liran Bashari</div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link pe-3" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pe-3" activeClassName="active" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pe-3" activeClassName="active" to="/resume">Resume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pe-3" activeClassName="active" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
