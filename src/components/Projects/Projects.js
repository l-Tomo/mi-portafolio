import { useState } from 'react';

export const useProjects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      name: 'todo-app',
      title: 'Gestor de ToDos',
      description: 'Aplicación para gestionar tareas personales. Incluye funcionalidades como creación, edición, eliminación y organización por prioridad.',
      tech: ['React', 'Zustand', 'Material UI'],
      year: 2025
    },
    {
      name: 'sena-kitchen',
      title: 'Software Cocina SENA',
      description: 'Sistema para controlar recetas, pedidos y stock de ingredientes en el área de cocina del SENA sede Comercio. Interfaz intuitiva y centrada en las necesidades educativas.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      year: 2025
    },
    {
      name: 'empleo-web',
      title: 'Portal de Empleo (75%)',
      description: 'Plataforma web para aplicar a trabajos, con perfiles personalizables y envío de CV automatizado. Actualmente en desarrollo.',
      tech: ['Next.js', 'TailwindCSS'],
      year: 2025
    },
    {
      name: 'portafolio',
      title: 'Mi Portafolio',
      description: 'Este mismo sitio web donde exploro diseños, tecnologías modernas y presento mis proyectos y experiencia.',
      tech: ['React', 'Material UI', 'Framer Motion'],
      year: 2025
    }
  ];

  return { projects, selected, setSelected };
};
