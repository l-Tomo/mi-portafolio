import { useState } from 'react';

export const useProjects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      name: 'todo-app',
      title: 'Gestor de ToDos',
      description: 'Aplicación para gestionar tareas personales. Incluye funcionalidades como creación, edición, eliminación y organización por prioridad.',
      tech: ['React', 'Material UI'],
      images: [
        '/Images/CapturaProyecto3.png',
        '/Images/CapturaProyecto4.png',
      ],
      github: 'https://github.com/l-Tomo/homeworks',
      year: 2025
    },
    {
      name: 'sena-kitchen',
      title: 'Software Cocina SENA',
      description: 'Sistema para controlar recetas, pedidos y stock de ingredientes en el área de cocina del SENA sede Comercio. Interfaz intuitiva y centrada en las necesidades educativas.',
      tech: ['Laravel', 'SqlDB'],
      images: [
        '/Images/todos-1.png',
        '/Images/todos-2.png',
      ],
      github: 'No es codigo abierto, pero puedes consultar el proyecto en la sede del SENA',
      year: 2025
    },

    {
      name: 'portafolio',
      title: 'Mi Portafolio',
      description: 'Este mismo sitio web donde exploro diseños, tecnologías modernas y presento mis proyectos y experiencia.Es codigo abierto, puedes ver el código en mi GitHub, A continuación te dejo el enlace.',
      tech: ['React', 'Material UI', 'CSS'],
      images: [
        '/Images/CapturaProyecto1.png',
        '/Images/CapturaProyecto2.png',
      ],
      github: 'https://github.com/l-Tomo/mi-portafolio',
      year: 2025
    }
  ];

  return { projects, selected, setSelected };
};
