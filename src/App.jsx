import React from 'react';
import { CityProvider } from './components/city/CityContext';
import LandingPage from './pages/LandingPage';
import Footer from './components/layout/Footer';
import CookieBanner from './components/layout/CookieBanner';

const App = () => {
  return (
    <CityProvider>
      <div id="app">
        <LandingPage />
        <Footer />
        <CookieBanner />
      </div>
    </CityProvider>
  );
};

export default App;