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
          <CitySlider />
        </section>
        
        <VenueGrid venues={filteredVenues} />
      </main>
    </div>
  );
};

export default LandingPage;