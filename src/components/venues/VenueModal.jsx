import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImage, FaUtensils, FaInfoCircle, FaDownload } from 'react-icons/fa';
import { fadeIn, scaleUp } from '../ui/animations';
import CloseButton from '../ui/CloseButton';

const GalleryTab = ({ images }) => {
  return (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <div key={index} className="gallery-item">
          <div 
            className="gallery-image" 
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}
    </div>
  );
};

const MenuTab = ({ pdfUrl }) => {
  return (
    <div className="menu-container">
      <div className="pdf-preview">
        <div className="pdf-placeholder">
          <FaUtensils className="pdf-icon" />
          <p>Меню заведения</p>
        </div>
      </div>
      <a 
        href={pdfUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="download-button"
      >
        <FaDownload /> Скачать меню (PDF)
      </a>
    </div>
  );
};

const InfoTab = ({ venue }) => {
  return (
    <div className="info-tab">
      <div className="modal-header">
        <h2>{venue.name}</h2>
        <p>{venue.location}</p>
      </div>
      
      <div className="modal-body">
        <img src={venue.image} alt={venue.name} />
        <div className="venue-details">
          <p>{venue.description}</p>
          
          <div className="details-grid">
            <div className="detail-item">
              <span>Часы работы:</span>
              <strong>{venue.hours}</strong>
            </div>
            <div className="detail-item">
              <span>Телефон:</span>
              <strong>{venue.phone}</strong>
            </div>
            <div className="detail-item">
              <span>Особенности:</span>
              <div className="features">
                {venue.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VenueModal = ({ venue, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('info');
  
  if (!venue) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeIn}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content"
            variants={scaleUp}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} />
            
            {/* Заголовок модального окна */}
            <div className="modal-header">
              <h2>{venue.name}</h2>
              <p>{venue.location}</p>
            </div>
            
            {/* Стилизованные вкладки */}
            <div className="modal-tabs">
              <button 
                className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
                onClick={() => setActiveTab('info')}
              >
                <FaInfoCircle /> <span>Информация</span>
              </button>
              <button 
                className={`tab-button ${activeTab === 'gallery' ? 'active' : ''}`}
                onClick={() => setActiveTab('gallery')}
              >
                <FaImage /> <span>Галерея</span>
              </button>
              <button 
                className={`tab-button ${activeTab === 'menu' ? 'active' : ''}`}
                onClick={() => setActiveTab('menu')}
              >
                <FaUtensils /> <span>Меню</span>
              </button>
            </div>
            
            {/* Контент вкладок с прокруткой */}
            <div className="tab-content-scrollable">
              <div className="tab-content">
                {activeTab === 'info' && <InfoTab venue={venue} />}
                {activeTab === 'gallery' && <GalleryTab images={venue.gallery} />}
                {activeTab === 'menu' && <MenuTab pdfUrl={venue.menuPdf} />}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VenueModal;