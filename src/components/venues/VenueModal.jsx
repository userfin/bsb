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
  const mapContainerRef = useRef(null);
  const iframeRef = useRef(null);
  const loaderRef = useRef(null);

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

  // вставка карты — теперь создаём iframe напрямую для более быстрым рендером
  useEffect(() => {
    // требования: есть id конструктора, активная вкладка — info, и контейнер доступен
    if (!venue?.constructorId || activeTab !== TABS.INFO || !mapContainerRef.current) {
      // если контейнер есть, но не нужно показывать карту — очистим
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = '';
        iframeRef.current = null;
        loaderRef.current = null;
        // сброс inline-стилей, если хотите; оставляем чтобы не дергать визуально
      }
      return;
    }

    const container = mapContainerRef.current;

    // очистка перед вставкой (защита от дублирования)
    container.innerHTML = '';

    // Применяем inline-стили на контейнере, чтобы гарантировать вид и скругления сразу,
    // перезаписывая возможные медиа-правила в CSS, которые могли мешать.
    // Эти значения можно подстраивать; беру привычные 300px высоты.
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.borderRadius = '18px';
    container.style.background = 'transparent';
    container.style.width = '100%';
    container.style.height = venue.mapHeight ? String(venue.mapHeight) : '300px';

    // loader overlay — пока iframe не загрузился
    const loader = document.createElement('div');
    loader.setAttribute('aria-hidden', 'true');
    loader.style.position = 'absolute';
    loader.style.inset = '0';
    loader.style.display = 'flex';
    loader.style.alignItems = 'center';
    loader.style.justifyContent = 'center';
    loader.style.background = 'linear-gradient(180deg, rgba(2,6,12,0.2), rgba(2,6,12,0.2))';
    loader.style.backdropFilter = 'blur(2px)';
    loader.style.zIndex = '5';

    // spinner element
    const spinner = document.createElement('div');
    spinner.style.width = '42px';
    spinner.style.height = '42px';
    spinner.style.border = '4px solid rgba(255,255,255,0.12)';
    spinner.style.borderTop = '4px solid rgba(255,255,255,0.85)';
    spinner.style.borderRadius = '50%';
    spinner.style.animation = 'map-spinner 1s linear infinite';
    // minimal keyframes inlined via style tag so spinner works without external CSS changes
    const styleTag = document.createElement('style');
    styleTag.textContent = `
      @keyframes map-spinner {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleTag);

    loader.appendChild(spinner);
    container.appendChild(loader);
    loaderRef.current = loader;

    // Создаём iframe с виджетом Яндекса (widget endpoint) — рендерится быстрее и даёт контроль.
    // Используем widget URL, он поддерживает constructor id.
    const iframe = document.createElement('iframe');
    iframeRef.current = iframe;
    iframe.src = `https://yandex.ru/map-widget/v1/?um=constructor%3A${venue.constructorId}&lang=ru_RU`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.loading = 'lazy';
    iframe.style.display = 'block';
    iframe.style.border = '0';
    // задаём borderRadius на iframe, но главное — контейнер с overflow:hidden обеспечивает видимые скругления
    iframe.style.borderRadius = 'inherit';
    iframe.style.boxSizing = 'border-box';
    iframe.setAttribute('aria-label', `Карта: ${venue.location || venue.name || 'локация'}`);
    iframe.allowFullscreen = true;

    // плавное появление: начиная с прозрачности 0
    iframe.style.opacity = '0';
    iframe.style.transition = 'opacity .28s ease';

    // onload — скрываем loader, показываем iframe
    const onLoad = () => {
      try {
        if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
        iframe.style.opacity = '1';
      } catch (err) {
        // ignore
      }
    };

    iframe.addEventListener('load', onLoad);

    // Вставляем iframe в контейнер
    container.appendChild(iframe);

    // safety: фоллбек — если iframe не загрузился за 5s, убираем loader чтобы не висел вечно
    const fallbackTimer = setTimeout(() => {
      if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
      iframe.style.opacity = '1';
    }, 5000);

    // cleanup при смене вкладки/venue/размонтировании
    return () => {
      clearTimeout(fallbackTimer);
      iframe.removeEventListener('load', onLoad);
      // удаляем styleTag, spinner и iframe
      if (loader && loader.parentNode) {
        try { loader.parentNode.removeChild(loader); } catch (e) {}
      }
      if (iframe && iframe.parentNode) {
        try { iframe.parentNode.removeChild(iframe); } catch (e) {}
      }
      // очистка refs
      iframeRef.current = null;
      loaderRef.current = null;
      // remove injected style tag if still present
      if (styleTag && styleTag.parentNode) {
        try { styleTag.parentNode.removeChild(styleTag); } catch (e) {}
      }
      // optionally reset container inline styles if you want:
      // container.style.overflow = '';
      // container.style.borderRadius = '';
      // container.style.height = '';
    };
  }, [venue, activeTab]);

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

                {venue.constructorId && (
                  <div
                    ref={mapContainerRef}
                    className="info-map"
                    aria-hidden="false"
                    role="region"
                    aria-label={`Карта: ${location || name}`}
                  />
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