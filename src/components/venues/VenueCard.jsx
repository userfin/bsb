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
        <div className="card-top">
          <h3>{venue.name}</h3>
          <p className="card-description">{venue.shortDescription}</p>
          <div className="info-item">
            <span>{venue.hours}</span>
          </div>
        </div>

        <div className="card-bottom">
          <div className="info-item">
            <span>{venue.location}</span>
          </div>
          {venue.phone && (
            <div className="info-item">
              <span>{venue.phone}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default VenueCard;