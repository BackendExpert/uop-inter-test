import React, { useState, useEffect } from "react";
import image1 from '../../assets/13.jpg'
import image2 from '../../assets/Hdr1.jpg'
import image3 from '../../assets/IS.jpg'
import image4 from '../../assets/Hdr8.jpg'
import image5 from '../../assets/Hdr9.jpg'
import image6 from '../../assets/Hdr6.jpg'
import image7 from '../../assets/Hdr7.jpg'

const HeroSection = () => {
    // Sample data for images
    const [imagedata, setImageData] = useState([
        {
            img: image1,
            title: "Welcome to the University of Peradeniya",
            imgdesc: "Sri Lanka’s premier university, fostering excellence in education and research.",
            link: "#"
        },
        {
            img: image2,
            title: "A Campus of Natural Beauty",
            imgdesc: "Nestled among lush greenery and the Mahaweli River, our campus offers breathtaking views.",
            link: "#"
        },
        {
            img: image3,
            title: "World-Class Education",
            imgdesc: "Offering a wide range of undergraduate and postgraduate programs with a global reputation.",
            link: "#"
        },
        {
            img: image4,
            title: "Vibrant Student Life",
            imgdesc: "Engage in clubs, sports, cultural events, and extracurricular activities beyond the classroom.",
            link: "#"
        },
        {
            img: image5,
            title: "Innovative Research",
            imgdesc: "Pioneering research in science, technology, humanities, and more, driving progress in Sri Lanka and beyond.",
            link: "#"
        },
        {
            img: image6,
            title: "International Collaboration",
            imgdesc: "Partnering with leading institutions worldwide to promote global learning and research.",
            link: "#"
        },
        {
            img: image7,
            title: "Historic Legacy",
            imgdesc: "Founded in 1942, the University of Peradeniya has a rich history of academic and cultural excellence.",
            link: "#"
        }
    ]);


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagedata.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [imagedata.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagedata.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagedata.length);
    };

    return (
        <div className="relative w-full h-[90vh] overflow-hidden -mt-16">
            {/* Image Slider */}
            {imagedata.map((image, index) => (
                <img
                    key={index}
                    src={image.img}
                    alt={image.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                />
            ))}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Text Content & Button */}
            <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-6 sm:px-12 md:px-20 lg:px-32">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-2">
                    {imagedata[currentIndex].title}
                </h1>
                <p className="text-sm sm:text-lg md:text-xl text-white max-w-xs sm:max-w-md md:max-w-2xl mb-6">
                    {imagedata[currentIndex].imgdesc}
                </p>
                {imagedata[currentIndex].link && (
                    <a
                        href={imagedata[currentIndex].link}
                        className="px-3 sm:px-6 py-2 sm:py-3 bg-[#e8b910] text-white rounded text-sm sm:text-lg hover:bg-[#800000] transition duration-300"
                    >
                        Learn More
                    </a>
                )}
            </div>


            {/* Left Arrow */}
            <button
                className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full z-30 hover:bg-opacity-70"
                onClick={prevSlide}
            >
                &#10094;
            </button>

            {/* Right Arrow */}
            <button
                className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full z-30 hover:bg-opacity-70"
                onClick={nextSlide}
            >
                &#10095;
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-30">
                {imagedata.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === index ? "bg-[#560606]" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
