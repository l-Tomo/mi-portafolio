import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Box, Typography } from '@mui/material';
import './App.css';
import  MainUI  from './components/Main/MainUI';
import ExperienceUI from './components/Experience/ExperienceUI';
import ProjectsUI from './components/Projects/ProjectsUI'; // Import ProjectsUI
import AchievementsUI from './components/Achievements/AchievementsUI'; // Import AchievementsUI
import ContactUI from './components/Contact/ContactUI'; // Import ContactUI

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
           Mi Portafolio 
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
        {value === 3 && <AchievementsUI />}
        {value === 4 && <ContactUI />}      
      </Box>
    </Box>
  );
}

export default App;
