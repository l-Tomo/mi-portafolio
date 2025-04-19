import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Box, Typography } from '@mui/material';
import './App.css';
import  MainUI  from './components/Main/MainUI';
import ExperienceUI from './components/Experience/ExperienceUI';
import ProjectsUI from './components/Projects/ProjectsUI'; // Import ProjectsUI

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="App">
      <AppBar position="fixed" className="app-bar"elevation={0} color="transparent">
        <Toolbar className="toolbar">
          <Typography variant="h6" className="logo">
            Portafolio Tomas Alzate Cardona
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{ style: { background: '#fff' } }}
            className="tabs"
          >
            <Tab label="Inicio" className="tab" />
            <Tab label="Experiencia Laboral" className="tab" />
            <Tab label="Proyectos" className="tab" />
            <Tab label="Logros Academicos" className="tab" />
            <Tab label="Contacto" className="tab" />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Box className="content">
        {value === 0 &&  <MainUI />}
        {value === 1 && <ExperienceUI />}
        {value === 2 && <ProjectsUI />}
        {value === 3 && <Typography variant="h4">Aqui estará mis Logros Academicos </Typography>}
        {value === 4 && 
          <Typography variant="h4">Sección de Contacto</Typography>
        }
      </Box>
    </Box>
  );
}

export default App;
