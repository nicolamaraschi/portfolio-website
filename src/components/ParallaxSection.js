// src/components/ParallaxSection.js
import React, { useEffect, useRef } from 'react';
import '../styles/ParallaxSection.css';

const ParallaxSection = ({ 
  children,
  bgImage,
  height = '70vh', 
  speed = 0.5, 
  opacity = 0.7,
  overlay = 'rgba(0, 0, 0, 0.4)'
}) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.pageYOffset;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calcola la posizione relativa alla sezione
      const relativePosition = scrollPosition - sectionTop;
      
      // Applica l'effetto parallasse solo quando la sezione è in vista
      if (scrollPosition + window.innerHeight >= sectionTop && 
          scrollPosition <= sectionTop + sectionHeight) {
        
        // Calcola lo spostamento verticale in base alla velocità
        const yPos = relativePosition * speed;
        
        // Applica la trasformazione
        sectionRef.current.style.backgroundPosition = `center ${yPos}px`;
      }
    };
    
    // Aggiungi l'event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup dell'event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  // Stile inline per consentire proprietà dinamiche
  const sectionStyle = {
    height: height,
    backgroundImage: `url(${bgImage})`,
    position: 'relative',
  };
  
  // Stile per il livello di overlay
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: overlay,
    opacity: opacity,
    zIndex: 1,
  };
  
  // Stile per il contenuto
  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
  };

  return (
    <div className="parallax-section" style={sectionStyle} ref={sectionRef}>
      <div className="parallax-overlay" style={overlayStyle}></div>
      <div className="parallax-content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;