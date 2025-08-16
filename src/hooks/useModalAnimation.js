import { useState, useEffect } from 'react';

const useModalAnimation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [animationStage, setAnimationStage] = useState('closed'); // closed | opening | open | closing

  const openModal = (venue) => {
    setSelectedVenue(venue);
    setAnimationStage('opening');
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setAnimationStage('closing');
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedVenue(null);
      document.body.style.overflow = 'auto';
      setAnimationStage('closed');
    }, 50);
  };

  // Запрет скролла при открытом модальном окне
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return {
    isModalOpen,
    selectedVenue,
    animationStage,
    openModal,
    closeModal
  };
};

export default useModalAnimation;