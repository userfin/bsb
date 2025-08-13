import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const CloseButton = ({ onClick }) => {
  return (
    <motion.button 
      className="close-button"
      onClick={onClick}
      whileHover={{ rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Закрыть"
    >
      <FaTimes />
    </motion.button>
  );
};

export default CloseButton;