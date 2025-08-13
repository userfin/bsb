import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Все заведения в одном месте</p>
        <p>Создано с любовью к вашему городу</p>
      </div>
    </footer>
  );
};

export default Footer;