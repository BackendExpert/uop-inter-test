import React from 'react';
import HeroSection from './HeroSection';
import MenuItems from './MenuItems';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* MenuItems - Positioned above HeroSection */}
      <div className="absolute xl:top-96 md:top-100 top-[300px] left-1/2 transform -translate-x-1/2 z-10 w-full max-w-4xl">
        <MenuItems />
      </div>

      <div className="xl:mt-64 md:mt-72 mt-20">
        lore\

      </div>
    </div>
  );
};

export default HomePage;
