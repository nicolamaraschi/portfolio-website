// src/components/ProjectCard.js
import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
    </div>
  );
}

export default ProjectCard;
