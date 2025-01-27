import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🚀 Il Mio Portfolio
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav" 
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} 
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                💼 Progetti
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                👤 Chi Sono
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/creational-patterns">
                📐 Design Pattern
              </Link>
            </li>
            {/* Nuovo link aggiunto */}
            <li className="nav-item">
              <Link className="nav-link" to="/cleanCode">
                🧹 Clean Code
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Refactoring">
                🧹 Refactoring
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                📧 Contatti
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;