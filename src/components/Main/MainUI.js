import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useMain } from './Main';
import './Main.css';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const MainUI = () => {
  const { videoLoaded, handleVideoLoad } = useMain();

  return (
    <Container className="main-container">
      <Typography variant="h4" gutterBottom className="main-title">
        Me presento, soy Tomás Alzate Cardona su futuro desarrollador 
      </Typography>

      <Box className="video-wrapper">
        <iframe
          width="100%"
          height="500"
          src="https://youtu.be/3-yNIIEwXlY"
          title="Presentación de Tomas Alzate"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleVideoLoad}
        ></iframe>
      </Box>

      <Typography variant="h6" paragraph className="main-description">
        Soy un joven profesional comprometido, respetuoso y con una fuerte orientación al crecimiento continuo. Me destaco por mi capacidad para acatar instrucciones con precisión y responsabilidad, pero también por mi iniciativa al proponer ideas que optimicen procesos, resuelvan problemas y aporten valor real a los proyectos.

        Valoro profundamente el trabajo en equipo y me integro fácilmente a cualquier grupo de trabajo, fomentando un ambiente colaborativo y productivo. Asumo cada tarea con determinación, eficiencia y sentido de responsabilidad, demostrando mis habilidades técnicas y mi disposición para enfrentar nuevos retos.

        Mi enfoque no se limita a cumplir —busco siempre superar expectativas, aprender constantemente y aportar soluciones innovadoras que impulsen los objetivos de la empresa.
      </Typography>

      {videoLoaded && (
        <>
          <Typography
            variant="h6"
            gutterBottom
            className="video-status"
            sx={{ marginTop: 4 }}
          >
            Tecnologías que domino:
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
              mt: 2,
            }}
          >
            {[
              { name: 'Python', url: 'https://www.python.org/' },
              { name: 'JavaScript', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
              { name: 'CSS', url: 'https://www.w3schools.com/css/' },
              { name: 'HTML', url: 'https://www.w3schools.com/html/' },
              { name: 'C#', url: 'https://learn.microsoft.com/es-es/dotnet/csharp/' },
              { name: 'React', url: 'https://es.reactjs.org/' },
              { name: 'Express.js', url: 'https://expressjs.com/' },
              { name: 'Node.js', url: 'https://nodejs.org/' },
              { name: 'React Hook Form', url: 'https://react-hook-form.com/' },
              { name: 'Material UI', url: 'https://mui.com/' },
              { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
              { name: 'MySQL', url: 'https://www.mysql.com/' },
              { name: 'Git', url: 'https://git-scm.com/' },
              { name: 'Firebase', url: 'https://firebase.google.com/' },
              { name: 'Vercel', url: 'https://vercel.com/' },
              { name: 'Google Cloud Platform', url: 'https://cloud.google.com/' },
              { name: 'Figma', url: 'https://www.figma.com/' },
              { name: 'Canva', url: 'https://www.canva.com/' },
              { name: 'Postman', url: 'https://www.postman.com/' },
              { name: 'Swagger', url: 'https://swagger.io/' },
            ].map((tech) => (
              <ListItem
                key={tech.name}
                disablePadding
                sx={{
                  bgcolor: '#2a2a2a',
                  borderRadius: 2,
                  transition: '0.3s',
                  '&:hover': {
                    bgcolor: '#333',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <ListItemButton
                  component="a"
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ borderRadius: 2 }}
                >
                  <ListItemIcon>
                    <CodeIcon sx={{ color: '#90caf9' }} />
                  </ListItemIcon>
                  <ListItemText primary={tech.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        </>
      )}
    </Container>
  );
};

export default MainUI;
