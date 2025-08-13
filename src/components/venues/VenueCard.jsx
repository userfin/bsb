import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const VenueCard = ({ venue, onClick }) => {
  return (
    <motion.div 
      className="venue-card"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(venue)}
    >
      <div className="card-image" style={{ backgroundImage: `url(${venue.image})` }} />
      <div className="card-content">
        <h3>{venue.name}</h3>
        <p className="card-description">{venue.shortDescription}</p>
        
        <div className="venue-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>{venue.location}</span>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <span>{venue.hours}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VenueCard;