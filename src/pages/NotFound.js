// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>404 - Pagina non trovata | Nicola Maraschi</title>
        <meta name="description" content="La pagina che stai cercando non esiste o è stata spostata." />
      </Helmet>
      
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Pagina non trovata</h2>
        <p className="not-found-message">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link to="/" className="back-home-btn">
          Torna alla Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;