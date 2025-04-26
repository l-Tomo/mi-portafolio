import React, { useState } from 'react';
import { useContact } from './Contact';
import './Contact.css';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload } from 'react-icons/fa';

const ContactUI = () => {
  const { linkedin, whatsapp, email, resume } = useContact();
  
  // Controlamos el hover
  const [hovered, setHovered] = useState(null);

  return (
    <div className="contact-container">
      <h1>Contáctame</h1>
      <div className="contact-options">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card linkedin"
        >
          <FaLinkedin size={50} />
          <span>LinkedIn</span>
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card whatsapp"
          onMouseEnter={() => setHovered('whatsapp')}
          onMouseLeave={() => setHovered(null)}
        >
          <FaWhatsapp size={50} />
          <span>{hovered === 'whatsapp' ? '+57 311 7581397' : 'WhatsApp'}</span>
        </a>

        <a
          href={email}
          className="contact-card email"
          onMouseEnter={() => setHovered('email')}
          onMouseLeave={() => setHovered(null)}
        >
          <FaEnvelope size={50} />
          <span>{hovered === 'email' ? 'tomas.alzatecardona13@gmail.com' : 'Email'}</span>
        </a>

        <a
          href={resume}
          download
          className="contact-card download"
        >
          <FaDownload size={50} />
          <span>Descargar Hoja de Vida</span>
        </a>
      </div>
    </div>
  );
};

export default ContactUI;
