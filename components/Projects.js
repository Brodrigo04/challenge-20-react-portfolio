// components/Projects.js
import React from 'react';
import ProjectItem from './ ProjectItem';
import projectsData from '../data/projectsData';

function Projects() {
  return (
    <section id="Projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
