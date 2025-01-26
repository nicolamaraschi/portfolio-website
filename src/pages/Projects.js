// src/pages/Projects.js
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projectsByYear = [
    {
      year: "Liceo (2015 - 2021)",
      experiences: [
        {
          title: "Progetto di Scienze Applicate",
          role: "Studente",
          description: [
            "Studio approfondito di argomenti scientifici e informatici",
            "Sviluppo di piccoli progetti software di laboratorio",
          ],
          skills: "Ricerca, sperimentazione, uso di strumenti didattici",
        },
      ],
    },
    {
      year: "2° Anno di Triennale",
      experiences: [
        {
          title: "Progetto Universitario - Basi di Dati",
          role: "Database Manager",
          description: [
            "Sviluppo documentazione per il database con LaTeX",
            "Creazione diagramma ER con draw.io",
            "Implementazione e popolamento tabelle in PostgreSQL",
          ],
          skills: "Postgres, LaTeX, draw.io",
        },
        {
          title: "Socket in C per Reti 1",
          role: "Programmatore C",
          description: [
            "Sviluppo protocollo di comunicazione client-server",
            "Uso della libreria socket in C e documentazione del protocollo",
          ],
          skills: "Programmazione C, socket, Linux",
        },
        {
          title: "Progetto Agenda per Programmazione a Oggetti",
          role: "Programmatore Java",
          description: [
            "Creazione di classi e interfacce in Java",
            "Testing del codice e scrittura documentazione Javadoc",
          ],
          skills: "Java, OOP, GitHub, Javadoc",
        },
      ],
    },
    {
      year: "3° Anno di Triennale",
      experiences: [
        {
          title: "Progetto Universitario - Esame Web",
          role: "Sviluppatore Full Stack",
          description: [
            "Sviluppo del frontend con HTML, CSS e JavaScript",
            "Creazione del backend con Node.js, Express, e SQLite",
          ],
          skills: "HTML, CSS, JavaScript, Node.js, Express, SQLite",
        },
        {
          title: "Compilatore per Fondamenti di Linguaggi e Traduttori",
          role: "Programmatore Java",
          description: [
            "Creazione di un compilatore per il linguaggio AC-DC",
            "Sviluppo di scanner, parser e code generator",
          ],
          skills: "Java, LaTeX, JUnit",
        },
        {
          title: "Progetto Reti 2 - Vaadin e FastAPI",
          role: "Programmatore",
          description: [
            "Sviluppo frontend in Java con Vaadin",
            "Backend in Python con FastAPI e database SQLite",
            "Implementazione protocolli IoT con MQTT e simulatore in JS",
          ],
          skills: "Vaadin, Python, FastAPI, SQLite, MQTT, GitHub",
        },
        {
          title: "Progetto Algoritmi 2",
          role: "Programmatore Java",
          description: [
            "Sviluppo di algoritmi per grafi (Floyd-Warshall e Huffman)",
            "Implementazione di metodi come `removeVertex`, `containsEdge`, ecc.",
          ],
          skills: "Java, Algoritmi, GitHub, Testing",
        },
      ],
    },
  ];

  return (
    <section className="projects">
      <h2 className="projects-title">Esperienze e Progetti</h2>
      <div className="timeline">
        {projectsByYear.map((yearGroup, index) => (
          <div key={index} className="timeline-year">
            <h3 className="year">{yearGroup.year}</h3>
            {yearGroup.experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <h4 className="experience-title">{exp.title}</h4>
                <h5 className="experience-role">{exp.role}</h5>
                <ul className="experience-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <p className="experience-skills">Competenze: {exp.skills}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
