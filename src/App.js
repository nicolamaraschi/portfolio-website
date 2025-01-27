import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import CreationalPatterns from './pages/Pattern'; // Aggiungi l'import del componente
import ErrorBoundary from './components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import CleanCode from './pages/CleanCode'; // Aggiungi l'import del componente
import Refactoring from './pages/Refactoring'; // Aggiungi l'import del componente

function App() {
  return (
    <Router>
      <Navbar />

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Nuova rotta per i Design Pattern Creazionali */}
          <Route path="/creational-patterns" element={<CreationalPatterns />} />
          <Route path="/CleanCode" element={<CleanCode />}/> 
          <Route path="/Refactoring" element={<Refactoring />} />
          {/* Pagina 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>

      <Footer />
    </Router>
  );
}

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h1>404 - Pagina non trovata</h1>
      <p>La pagina che stai cercando non esiste.</p>
    </div>
  );
}

export default App;