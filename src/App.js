import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Box, Typography } from '@mui/material';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="App">
      <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar">
          <Typography variant="h6" className="logo">
            Página de presentación Tomas Alzate Cardona
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
        {value === 0 && <Typography variant="h4">Página Inicio</Typography>}
        {value === 1 && <Typography variant="h4">Aqui estará mi Experiencia laboral </Typography>}
        {value === 2 && <Typography variant="h4">Aqui estarán mis Proyectos </Typography>}
        {value === 3 && <Typography variant="h4">Aqui estarán mis Logros Academicos </Typography>}
        {value === 4 && (
          <Typography variant="h4">Sección de Contacto</Typography>
        )}
      </Box>
    </Box>
  );
}

export default App;
