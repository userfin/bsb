import React from 'react';
import Logo from '../ui/Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <div className="slogan">
          <h1>Ваши любимые места</h1>
          <p>Откройте для себя лучшие заведения в вашем городе</p>
        </div>
      </div>
    </header>
  );
};

export default Header;