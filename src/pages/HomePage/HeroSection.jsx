import React from 'react';
import homeImg from '../../assets/Hdr1.jpg';

const HeroSection = () => {
    return (
        <div
            className="block relative xl:h-[80vh] bg-cover bg-center xl:px-28 px-4 text-white -mt-20"
            style={{ 
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0)), url(${homeImg})` 
            }}
        >
            <div className="relative text-black">
                <div className="md:flex py-40">
                    <div className="w-full">
                        <h1 className="text-[#e8b910] font-semibold text-3xl md:text-left text-center">Welcome to University of Peradeniya</h1>
                        <p className="md:text-left text-center">International Students Programme</p>
                    </div>
                    <div className="w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
