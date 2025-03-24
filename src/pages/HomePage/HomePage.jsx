import React from 'react';
import HeroSection from './HeroSection';
import MenuItems from './MenuItems';
import StudentSay from './StudentSay';
import AboutUOP from './AboutUOP';
import OurPartners from './OurPartners';
import InterProjects from './InterProjects';
import Opportunities from './Opportunities';
import DataThree from './DataThree';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />


      <div className="">
        <div className="xl:px-28 md:px-10 px-4 my-16">
          <h1 className="text-[#560606] uppercase font-semibold text-lg">What our Students say</h1>
          <StudentSay />
        </div>
        <AboutUOP />
        <InterProjects />
        <DataThree />
        <Opportunities />
        <div className="xl:px-28 md:px-10 px-4 my-16">
          <h1 className="text-[#560606] uppercase font-semibold text-lg">Our Partners</h1>
          <OurPartners />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
