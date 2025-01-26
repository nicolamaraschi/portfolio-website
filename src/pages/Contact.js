import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Contattami</h2>
      <div className="contact-cards">
        {/* Card per GitHub */}
        <div className="contact-card">
          <img src="/images/github-logo.png" alt="GitHub Logo" className="contact-logo" />
          <h3>Contattami su GitHub</h3>
          <p>Scopri i miei progetti open source e contribuisci!</p>
          <a href="https://github.com/tuo-username" target="_blank" rel="noopener noreferrer" className="contact-link">
            Vai al mio GitHub
          </a>
        </div>

        {/* Card per LinkedIn */}
        <div className="contact-card">
          <img src="/images/linkedin-logo.png" alt="LinkedIn Logo" className="contact-logo" />
          <h3>Contattami su LinkedIn</h3>
          <p>Connettiti con me e scopri le mie esperienze professionali.</p>
          <a href="https://linkedin.com/in/tuo-username" target="_blank" rel="noopener noreferrer" className="contact-link">
            Vai al mio LinkedIn
          </a>
        </div>

        {/* Card per il form di contatto */}
        <div className="contact-card">
          <h3>Contattami tramite il sito</h3>
          <form className="contact-form">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Il tuo messaggio" rows="4" required></textarea>
            <button type="submit">Invia Messaggio</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
