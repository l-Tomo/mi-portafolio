import React, { useState } from 'react';
import './Projects.css';
import { useProjects } from './Projects';
import ImageZoomModal from './../ImageZoomModal';

export const ProjectsUI = () => {
  const { projects, selected, setSelected } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  return (
    <div className="projects-container">
      <div className="terminal-box">
        <p><span className="green">tomas</span><span className="white">@</span><span className="blue">portafolio</span>:<span className="white">~</span>$ ls</p>
        <p><span className="folder">proyectos-de-software</span></p>
        <p><span className="green">tomas</span><span className="white">@</span><span className="blue">portafolio</span>:<span className="white">~/proyectos-de-software</span>$ ls</p>
        {projects.map((project, index) => (
          <p
            key={index}
            className={`folder ${selected === project.name ? 'selected' : ''}`}
            onClick={() => setSelected(project.name)}
          >
            📁 {project.name}
          </p>
        ))}
      </div>

      {selected && (
        <div className="project-details">
          {projects.map((project) => {
            if (project.name === selected) {
              return (
                <div key={project.name}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <p><strong>Tecnologías:</strong> {project.tech.join(', ')}</p>                 
                  <p><strong>Imágenes:</strong></p>
                  <div className="project-images">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Imagen ${index + 1}`}
                        className="project-image"
                        onClick={() => handleImageClick(image)}
                      />
                    ))}
                  </div>
                  <p><strong>Repositorio:</strong> <a href={project.github}> {project.github}</a></p>
                  <p><strong>Año:</strong> {project.year}</p>
                  {project.repo && (
                    <p>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        Ver repositorio en GitHub
                      </a>
                    </p>
                  )}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      onClick={() => handleImageClick(project.image)}
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      <ImageZoomModal
        open={isModalOpen}
        image={modalImage}
        handleClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProjectsUI;
