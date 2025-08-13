import React from 'react';
import LandingPage from './pages/LandingPage';
import { CityProvider } from './components/city/CityContext';
import Footer from './components/layout/Footer';
import CookieBanner from './components/layout/CookieBanner';
import './styles/main.css';
import './styles/dark-theme.css';

function App() {
  return (
    <CityProvider>
      <div className="app-container">
        <LandingPage />
        <Footer />
        <CookieBanner /> {/* Добавлено */}
      </div>
    </CityProvider>
  );
}

export default App;