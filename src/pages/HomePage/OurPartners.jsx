import React, { useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const OurPartners = () => {
    const partnersour = [
        {
            id: 1,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/1.jpg",
        },
        {
            id: 2,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/2.jpg",
        },
        {
            id: 3,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/3.jpg",
        },
        {
            id: 4,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/4.jpg",
        },
        {
            id: 5,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/5.jpg",
        },
        {
            id: 6,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/6.jpg",
        },
        {
            id: 7,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/7.jpg",
        },
        {
            id: 8,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/8.jpg",
        },
        {
            id: 9,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/9.jpg",
        },
        {
            id: 10,
            link: "#",
            img: "https://inro.pdn.ac.lk/International_Relation/img/10.jpg",
        },
    ];
    
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden my-16">
            {/* Left Scroll Button */}
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                onClick={() => scroll("left")}
            >
                <FaAngleLeft size={24} />
            </button>

            {/* Scrollable Student Testimonials Container */}
            <div
                ref={scrollRef}
                className="mx-8 flex gap-4 overflow-x-auto scroll-smooth w-full no-scrollbar px-6"
                style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {partnersour.map((partner, index) => (
                    <div
                        key={index}
                        className="relative md:min-w-[calc(100%/6)] min-w-[calc(100%/2)] bg-white p-8  rounded-xl"
                        style={{ scrollSnapAlign: "start" }}
                    >
                        <a href={partner.link} target='_blank'>
                            <img
                                src={partner.img}
                                className="w-24 h-auto mx-auto rounded-full"
                            />
                        </a>
                    </div>
                ))}
            </div>

            {/* Right Scroll Button */}
            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                onClick={() => scroll("right")}
            >
                <FaAngleRight size={24} />
            </button>
        </div>
    );
}

export default OurPartners