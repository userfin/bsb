import React, { useEffect, useRef, useState } from 'react';
import CloseButton from '../ui/CloseButton';
import {
  FiInfo,
  FiImage,
  FiFileText,
  FiDownload,
  FiPhone,
  FiMapPin,
  FiClock,
  FiGlobe,
} from 'react-icons/fi';

const TABS = {
  INFO: 'info',
  GALLERY: 'gallery',
  MENU: 'menu',
};

export default function VenueModal({ isOpen, onClose, venue }) {
  const backdropRef = useRef(null);
  const [activeTab, setActiveTab] = useState(TABS.INFO);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) setActiveTab(TABS.INFO);
  }, [isOpen]);

  if (!isOpen || !venue) return null;

  const {
    name,
    shortDescription,
    description,
    image,
    city,
    location,
    hours,
    phone,
    website,
    features,
    gallery = [],
    menuImage,
    menuPdf,
  } = venue;

  const hasMenuImage = Boolean(menuImage);
  const hasMenuPdf = Boolean(menuPdf);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose?.();
  };

  return (
    <div
      className="modal-backdrop"
      ref={backdropRef}
      onMouseDown={handleBackdropClick}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
      >
        <CloseButton onClick={onClose} />

        <div className="modal-bar">
          <div className="modal-titlegroup">
            <h2 className="modal-title">{name}</h2>
            {shortDescription && (
              <p className="modal-subtitle">{shortDescription}</p>
            )}
          </div>

          <div className="modal-tabs">
            <button
              className={`tab-button ${activeTab === TABS.INFO ? 'active' : ''}`}
              onClick={() => setActiveTab(TABS.INFO)}
            >
              <FiInfo /> Информация
            </button>
            <button
              className={`tab-button ${activeTab === TABS.GALLERY ? 'active' : ''}`}
              onClick={() => setActiveTab(TABS.GALLERY)}
            >
              <FiImage /> Галерея
            </button>
            <button
              className={`tab-button ${activeTab === TABS.MENU ? 'active' : ''}`}
              onClick={() => setActiveTab(TABS.MENU)}
            >
              <FiFileText /> Меню
            </button>
          </div>
        </div>

        <div className="tab-content-area">
          {activeTab === TABS.INFO && (
            <div className="modal-body info-layout">
              <div className="info-media">
                <div
                  className="info-hero-image"
                  style={{
                    backgroundImage: `url(${image || ''})`,
                  }}
                  aria-label="Главное изображение"
                />
              </div>

              <div className="info-details tab-content-scrollable">
                {!!description && (
                  <div className="venue-details">
                    <p>{description}</p>
                  </div>
                )}

                <div className="details-grid">
                  {city && (
                    <div className="detail-item">
                      <span><FiMapPin /></span>
                      <strong>{city}{location ? ` — ${location}` : ''}</strong>
                    </div>
                  )}
                  {!city && location && (
                    <div className="detail-item">
                      <span><FiMapPin /></span>
                      <strong>{location}</strong>
                    </div>
                  )}
                  {hours && (
                    <div className="detail-item">
                      <span><FiClock /></span>
                      <strong>{hours}</strong>
                    </div>
                  )}
                  {phone && (
                    <div className="detail-item">
                      <span><FiPhone /></span>
                      <strong>
                        <a href={`tel:${phone}`} className="link-inline">{phone}</a>
                      </strong>
                    </div>
                  )}
                  {website && (
                    <div className="detail-item">
                      <span><FiGlobe /></span>
                      <strong>
                        <a href={website} target="_blank" rel="noreferrer" className="link-inline">
                          Перейти на сайт
                        </a>
                      </strong>
                    </div>
                  )}
                </div>

                {Array.isArray(features) && features.length > 0 && (
                  <div className="features">
                    {features.map((f, i) => (
                      <span key={i} className="feature-tag">{f}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === TABS.GALLERY && (
            <div className="tab-content-scrollable">
              <div className="gallery-grid">
                {gallery.length > 0 ? (
                  gallery.map((src, i) => (
                    <div className="gallery-item" key={i}>
                      <div
                        className="gallery-image"
                        style={{ backgroundImage: `url(${src})` }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="empty-state">
                    <p>Галерея пока пустая.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === TABS.MENU && (
            <div className="tab-content-scrollable">
              <div className="menu-container">
                {hasMenuImage ? (
                  <div className="menu-image-wrap">
                    <img
                      className="menu-image"
                      src={menuImage}
                      alt="Меню"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="placeholder-card">
                    <p className="muted">Изображение меню недоступно.</p>
                  </div>
                )}

                {hasMenuPdf && (
                  <a
                    className="download-button"
                    href={menuPdf}
                    download
                  >
                    <FiDownload /> Скачать PDF
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}