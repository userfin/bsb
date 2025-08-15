import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const CloseButton = ({ onClick }) => {
  return (
    <motion.button 
      className="close-button"
      onClick={onClick}
      whileHover={{ rotate: 90, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Закрыть"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <FaTimes />
    </motion.button>
  );
};

export default CloseButton;