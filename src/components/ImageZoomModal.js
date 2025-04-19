// ImageZoomModal.js
import React from 'react';
import { Modal, Box } from '@mui/material';

const zoomModalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  bgcolor: 'rgba(0, 0, 0, 0.95)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const ImageZoomModal = ({ open, image, handleClose }) => {
  if (!image) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={zoomModalStyle} onClick={handleClose}>
        <img
          src={image}
          alt="zoom"
          style={{
            maxWidth: '90%',
            maxHeight: '90%',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 0 20px #000',
          }}
        />
      </Box>
    </Modal>
  );
};

export default ImageZoomModal;
