// ExperienceUI.js
import React, { useState } from 'react';
import { useExperience } from './Experience';
import './Experience.css';
import { Typography, Box, Card, CardMedia, CardContent, Avatar } from '@mui/material';
import ExperienceModal from './ExperienceModal';

const ExperienceUI = () => {
  const { experiences } = useExperience();
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <Box className="experience-container">
      <Box className="experience-list">
        {experiences.map((exp, index) => (
          <Card className="experience-card" key={index} sx={{
            backgroundColor: '#2a2a2a',
            color: '#f5f5f5'
          }} onClick={() => handleCardClick(exp)}>
            <CardMedia
              component="img"
              className="experience-image"
              image={exp.image}
              alt={exp.title}
            />
            <CardContent sx={{
              backgroundColor: '#2a2a2a',
              color: '#f5f5f5'
            }}>
              <Typography variant="h6" sx={{ color: '#f5f5f5' }}>{exp.title}</Typography>
              <Typography variant="subtitle2" sx={{ color: '#bbbbbb' }}>{exp.period}</Typography>
              <br />
              <Box className="contact-info">
                <Avatar>{exp.contact.name[0]}</Avatar>
                <Box>
                  <Typography variant="body1" sx={{ color: '#f5f5f5' }}>{exp.contact.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#bbbbbb' }}>
                    {exp.contact.role} — {exp.contact.phone}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <ExperienceModal open={modalOpen} handleClose={handleCloseModal} experience={selectedExperience} />
    </Box>
  );
};

export default ExperienceUI;
