import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="logo"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span>CityVenues</span>
    </motion.div>
  );
};

export default Logo;