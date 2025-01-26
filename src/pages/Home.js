// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';

function Home() {
  const skillsCategories = [
    {
      category: 'Frontend',
      skills: [
        { title: 'HTML, CSS, JavaScript', description: 'Linguaggi di base per il web', image: 'html css js.png' }, // Presente
        { title: 'React, Bootstrap', description: 'Framework e librerie per UI reattive', image: 'react.png' }, // Presente
      ],
    },
    {
      category: 'Backend',
      skills: [
        { title: 'Node.js, Express', description: 'Server e framework per API', image: 'node.png' }, // Presente
        { title: 'Python, Java', description: 'Linguaggi di programmazione lato server', image: 'python.png' }, // Presente
      ],
    },
    {
      category: 'Database',
      skills: [
        { title: 'MongoDB, MySQL', description: 'Database NoSQL e SQL', image: 'mongodb-vs-mysql.jpg' }, // Presente
        { title: 'PostgreSQL, SQLite', description: 'Altri sistemi di gestione dei dati', image: 'sqlite e postgresql.png' }, // Presente
      ],
    },
    {
      category: 'API',
      skills: [
        { title: 'REST, GraphQL', description: 'Tecnologie per interfacce di programmazione', image: 'rest api.png' }, // Presente
        { title: 'JWT', description: 'Autenticazione sicura per API', image: 'jwt.jpg' }, // Presente
      ],
    },
    {
      category: 'Versioning',
      skills: [
        { title: 'Git, GitHub', description: 'Controllo versione e collaborazione', image: 'git_vs_github.avif' }, // Presente
      ],
    },
    {
      category: 'Documentazione',
      skills: [
        { title: 'Swagger, Postman', description: 'Strumenti per documentare e testare le API', image: 'postaman vs swagger.png' }, // Presente
      ],
    },
    {
      category: 'Organizzazione',
      skills: [
        { title: 'Trello, Jira', description: 'Strumenti di project management', image: 'Trello_logo.svg.png' }, // Presente
        { title: 'Asana', description: 'Piattaforma per la gestione dei compiti', image: 'asana.webp' }, // Presente
      ],
    },
  ];

  return (
    <section className="home">
      <h1 className="home-title">Benvenuti nel Mio Portfolio</h1>
      <p className="home-description">
        Sono uno sviluppatore full-stack con competenze in frontend, backend e cybersecurity. Esplora le mie competenze qui sotto!
      </p>
      {skillsCategories.map((category, index) => (
        <div key={index} className="skills-category">
          <h2 className="category-title">{category.category}</h2>
          <div className="skills-grid">
            {category.skills.map((skill, skillIndex) => (
              <div className="skill-card" key={skillIndex}>
                <img src={`images/${skill.image}`} alt={skill.title} className="skill-image" />
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Home;
