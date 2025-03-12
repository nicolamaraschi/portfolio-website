// src/components/OptimizedImage.js
import React, { useState, useEffect, useRef } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  webpSrc = '', // Versione WebP dell'immagine (opzionale)
  placeholderSrc = '', // Immagine segnaposto a bassa risoluzione (opzionale)
  loadingStrategy = 'lazy' // 'lazy' o 'eager'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loadingStrategy === 'eager');
  const imgRef = useRef(null);

  // Configurazione dell'observer per il lazy loading
  useEffect(() => {
    if (loadingStrategy === 'eager' || !imgRef.current) return;

    // Riferimento stabile all'elemento corrente
    const currentRef = imgRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Carica l'immagine quando è a 200px dallo schermo
        threshold: 0.01
      }
    );

    observer.observe(currentRef);

    return () => {
      // Usa la variabile locale invece del ref.current diretto
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [loadingStrategy]);

  // Gestisce il completamento del caricamento dell'immagine
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  const imageStyle = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    width: width,
    height: height,
  };

  // Elemento placeholder
  const placeholderElement = placeholderSrc ? (
    <img
      src={placeholderSrc}
      alt=""
      className={`${className} placeholder-image`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        filter: 'blur(10px)',
        opacity: isLoaded ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  ) : null;

  // Supporto WebP con fallback
  const mainImage = webpSrc ? (
    <picture>
      <source srcSet={isInView ? webpSrc : ''} type="image/webp" />
      <img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        className={className}
        onLoad={handleImageLoaded}
        style={imageStyle}
        width={width}
        height={height}
      />
    </picture>
  ) : (
    <img
      ref={imgRef}
      src={isInView ? src : ''}
      alt={alt}
      className={className}
      onLoad={handleImageLoaded}
      style={imageStyle}
      width={width}
      height={height}
    />
  );

  return (
    <div className="optimized-image-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {placeholderElement}
      {mainImage}
    </div>
  );
};

export default OptimizedImage;