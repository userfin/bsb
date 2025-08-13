import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Показываем баннер только если пользователь еще не дал согласие
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="cookie-banner"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cookie-content">
        <p>Мы используем файлы cookie. Продолжая использовать сайт, вы соглашаетесь с нашей <a href="/privacy">Политикой конфиденциальности</a>.</p>
        <div className="cookie-buttons">
          <button 
            className="cookie-button decline" 
            onClick={handleDecline}
          >
            Не сейчас
          </button>
          <button 
            className="cookie-button accept" 
            onClick={handleAccept}
          >
            Хорошо
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;