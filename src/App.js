import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary'; // Aggiungi un Error Boundary
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Error Boundary per gestire errori nei componenti */}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Pagina 404 per rotte non trovate */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

// Componente per la pagina 404
function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h1>404 - Pagina non trovata</h1>
      <p>La pagina che stai cercando non esiste.</p>
    </div>
  );
}

export default App;