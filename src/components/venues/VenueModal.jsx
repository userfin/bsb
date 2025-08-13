import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseButton from '../ui/CloseButton';
import { fadeIn, scaleUp } from '../ui/animations';

const VenueModal = ({ venue, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeIn}
        >
          <motion.div 
            className="modal-content"
            variants={scaleUp}
          >
            <CloseButton onClick={onClose} />
            
            <div className="modal-header">
              <h2>{venue.name}</h2>
              <p>{venue.location}</p>
            </div>
            
            <div className="modal-body">
              <img src={venue.image} alt={venue.name} />
              <div className="venue-details">
                <p>{venue.description}</p>
                <ul>
                  <li>Часы работы: {venue.hours}</li>
                  <li>Телефон: {venue.phone}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VenueModal;