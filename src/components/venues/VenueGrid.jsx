import React from 'react';
import VenueCard from './VenueCard';
import VenueModal from './VenueModal';
import useModalAnimation from '../../hooks/useModalAnimation';

const VenueGrid = ({ venues }) => {
  const { isModalOpen, selectedVenue, openModal, closeModal } = useModalAnimation();

    if (venues.length === 0) {
    return (
      <section className="venue-grid-section">
        <div className="no-venues">
          <h3>В этом городе пока нет заведений</h3>
          <p>Попробуйте выбрать другой город или зайдите позже</p>
        </div>
      </section>
    );
  }

  return (
    <section className="venue-grid-section">
      <div className="venue-grid">
        {venues.map(venue => (
          <VenueCard 
            key={venue.id} 
            venue={venue} 
            onClick={() => openModal(venue)} 
          />
        ))}
      </div>
      
      <VenueModal 
        venue={selectedVenue} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default VenueGrid;