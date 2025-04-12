import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useMain } from './Main';
import './Main.css';

const MainUI = () => {
  const { videoLoaded, handleVideoLoad } = useMain();

  return (
    <Container className="main-container">
      <Typography variant="h4" gutterBottom className="main-title">
        Me presento, soy Tomás Alzate
      </Typography>

      <Box className="video-wrapper">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Presentación de Tomas Alzate"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleVideoLoad}
        ></iframe>
      </Box>

      <Typography variant="h6" paragraph className="main-description">
        Hola, soy Tomás Alzate, un desarrollador con experiencia en varias tecnologías.
        En este video comparto un poco sobre mi recorrido profesional y lo que me apasiona del desarrollo de software.
      </Typography>

      {videoLoaded && (
        <Typography className="video-status">✅ Video cargado correctamente</Typography>
      )}
    </Container>
  );
};

export default MainUI;
