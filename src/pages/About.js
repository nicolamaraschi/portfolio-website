import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-image">
          <img src="/images/paralasse.jpeg" alt="Codice" className="code-image" />
        </div>
        <div className="about-info">
          <h2>Informazioni su di me</h2>
          <p>Frontend e Backend Developer</p>
          <p>Laureato triennale di Informatica in corso per Sicurezza Informatica.</p>
          <p>Lavoratore di progetti web e di CRM web.</p>
        </div>
      </div>

      {/* Sezione dei frame per le anteprime dei siti */}
      <div className="project-previews">
        <h3 className="preview-title">Progetti Recenti</h3>
        <div className="preview-frames">
          <iframe
            src="https://website-power-racing.vercel.app/servizi"
            title="Power Racing"
            className="preview-frame"
          ></iframe>
          <iframe
            src="https://website-dave-five.vercel.app/"
            title="Website Dave"
            className="preview-frame"
          ></iframe>
          <iframe
            src="https://nicolamaraschi.github.io/website-client-ferramenta/#/main"
            title="Ferramenta Client"
            className="preview-frame"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default About;
