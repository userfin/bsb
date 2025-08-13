import React from 'react';
import { motion } from 'framer-motion';

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
        <p>{venue.shortDescription}</p>
      </div>
    </motion.div>
  );
};

export default VenueCard;