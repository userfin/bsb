import React from 'react';
import Header from '../components/layout/Header';
import CitySlider from '../components/city/CitySlider';
import VenueGrid from '../components/venues/VenueGrid';
import venuesData from '../data/venues';
import { useCity } from '../components/city/CityContext';

const LandingPage = () => {
  const { selectedCity } = useCity();
  const filteredVenues = venuesData.filter(venue => venue.city === selectedCity);

  return (
    <div className="landing-page">
      <Header />
      
      <main>
        <section className="hero-section">
          <div className="slogan">
            <h1>Лучшие заведения города</h1>
            <p>Откройте для себя уникальные места в вашем городе</p>
          </div>
          
          <CitySlider />
        </section>
        
        <VenueGrid venues={filteredVenues} />
      </main>
    </div>
  );
};

export default LandingPage;