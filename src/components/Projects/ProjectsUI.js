import React from 'react';
import './Projects.css';
import { useProjects } from './Projects';

const ProjectsUI = () => {
  const { projects, selected, setSelected } = useProjects();

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="green">tomas@portafolio</span>:<span className="blue">~/proyectos</span>$ ls
      </div>
      <div className="project-list">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-item"
            onClick={() => setSelected(project)}
          >
            {project.name}
          </div>
        ))}
      </div>

      {selected && (
        <div className="terminal-output">
          <div className="terminal-header">
            <span className="green">tomas@portafolio</span>:<span className="blue">~/proyectos</span>$ cat {selected.name}
          </div>
          <div className="project-info">
            <p><strong>Título:</strong> {selected.title}</p>
            <p><strong>Descripción:</strong> {selected.description}</p>
            <p><strong>Tecnologías:</strong> {selected.tech.join(', ')}</p>
            <p><strong>Año:</strong> {selected.year}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsUI;
