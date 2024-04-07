// components/ProjectItem.js
import React from 'react';

function ProjectItem({ project }) {
  return (
    <div className="Project-Item">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default ProjectItem;
