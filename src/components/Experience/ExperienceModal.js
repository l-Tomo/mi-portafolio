import React, { useState } from 'react';
import { Modal, Box, Typography, IconButton, ImageList, ImageListItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ImageZoomModal from './../ImageZoomModal'; // Adjust the import path as necessary

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '90vh',
  bgcolor: '#1e1e1e',
  color: '#fff',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  borderRadius: '12px',
};

const ExperienceModal = ({ open, handleClose, experience }) => {
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);

  const handleImageClick = (img) => {
    setZoomImage(img);
    setZoomOpen(true);
  };

  const handleZoomClose = () => {
    setZoomOpen(false);
    setZoomImage(null);
  };

  if (!experience) return null;

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box sx={modalStyle}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography id="modal-title" variant="h6">
              {experience.title}
            </Typography>
            <IconButton onClick={handleClose} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body1" paragraph>
            {experience.fullDescription}
          </Typography>
          {experience.gallery && experience.gallery.length > 0 && (
            <ImageList cols={3} gap={8}>
              {experience.gallery.map((img, idx) => (
                <ImageListItem key={idx} onClick={() => handleImageClick(img)} style={{ cursor: 'zoom-in' }}>
                  <img src={img} alt={`Galería ${idx}`} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Box>
      </Modal>
      <ImageZoomModal open={zoomOpen} image={zoomImage} handleClose={handleZoomClose} />
    </>
  );
};

export default ExperienceModal;
