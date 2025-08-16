import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CloseButton = ({ onClick }) => {
  return (
    <button 
      className="close-button"
      onClick={onClick}
      aria-label="Закрыть"
    >
      <FaTimes />
    </button>
  );
};

export default CloseButton;