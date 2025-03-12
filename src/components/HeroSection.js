// src/components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion'; // Richiede l'installazione di framer-motion

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Sostituisci con la tua foto professionale */}
          <img src="/images/profile-photo.jpg" alt="Nicola Maraschi" className="profile-photo" />
        </motion.div>
        
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1>Nicola Maraschi</h1>
          <h2>Full Stack Developer & Cybersecurity Specialist</h2>
          <p>Trasformo idee in applicazioni web sicure e scalabili, con competenze in frontend, backend e sicurezza informatica.</p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Progetti Recenti</a>
            <a href="#contact" className="btn btn-secondary">Contattami</a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-text">Progetti Web</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-text">Anni di Esperienza</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-text">Tecnologie</span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;