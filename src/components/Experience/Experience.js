// Experience.js 
import { useState } from 'react';

export const useExperience = () => {
  const [experiences] = useState([
    {
      title: 'Soporte de ERP a AcuaDC Luxury Store',
      period: '2024 - 2025',
      fullDescription:
        'Durante la temporada de diciembre a abril, brindé soporte a la importadora de ropa JDC y Accesorios femeninos Acuarella en la gestión de inventario y ventas. Asesoré en la migración del sistema ERP de Acuarella a Odoo, un ERP de código abierto en Python, y realicé labores de automatización que mejoraron significativamente los procesos. También manejé y configuré dispositivos como la pistola de código de barras y la computadora con lector integrado Zebra T26 para un conteo adecuado de productos durante traslados o ventas.',
      image: '/Images/JDC.png',
      gallery: [
        '/Images/Captura1.png',
        '/Images/Captura2.png',
        '/Images/Captura3.png',
      ],
      contact: {
        name: 'Daniel Correa',
        role: 'Jefe de Operaciones',
        phone: '312 8519452',
      },
    },
    {
      title: 'Prácticas de tecnología en Crystal S.A.S',
      period: '2024',
      fullDescription:
        'Durante mis prácticas profesionales de mayo a noviembre, desarrollé una aplicación web para el proceso de empleabilidad en Crystal S.A.S. La aplicación evaluaba a los candidatos según sus habilidades para asignarlos a cargos adecuados en la industria textil, como corte, tejedores o bodega.',
      image: '/Images/Crystal.png',
      gallery: [
        '/Images/Imagen1.png',
        '/Images/Imagen2.png',
      ],
      contact: {
        name: 'Juan Esteban Rojas Foronda',
        role: 'Ingeniero en Mantenimiento',
        phone: '313 5610579',
      },
    },
    {
      title: 'Alfabetista Educador en IdeAprende',
      period: '2019',
      fullDescription:
        'En mi adolescencia, fui seleccionado para ser maestro en clases de programación infantil en el centro de aprendizaje IdeAprende. Enseñé a niños de 6 a 12 años a programar en Scratch, un lenguaje visual que les permitía crear sus propios juegos y animaciones. Esta experiencia me ayudó a desarrollar habilidades pedagógicas y a comprender la importancia de la educación en tecnología desde una edad temprana.',
      image: '/Images/IdeAprende.jpg',
      gallery: [
        '/Images/descarga.jpg',
        '/Images/descarga2.png',                                  
      ],
      contact: {
        name: 'Santiago Restrepo',
        role: 'Ingeniero y Maestro',
        phone: '321 7714707',
      },
    },
  ]);

  return { experiences };
};
