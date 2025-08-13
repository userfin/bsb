import React from 'react';
import { useCity } from './CityContext';

const cities = ['Москва', 'Санкт-Петербург', 'Казань', 'Сочи'];

const CitySlider = () => {
  const { selectedCity, setSelectedCity } = useCity();

  return (
    <div className="city-slider">
      <div className="city-buttons">
        {cities.map(city => (
          <button
            key={city}
            className={`city-button ${selectedCity === city ? 'active' : ''}`}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CitySlider;