import React, { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const StudentSay = () => {
    const stdsay = [
        {
            id: 1,
            name: "Alice Johnson",
            desc: "Studying at the University of Peradeniya was a life-changing experience. The campus is beautiful, and the professors are highly supportive. I found the curriculum to be challenging yet rewarding, and I developed a deep appreciation for the Sri Lankan culture. The diverse student body also made it easy to build lasting friendships and networks.",
            from: "USA",
            img: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            id: 2,
            name: "Mohammed Ali",
            desc: "I enjoyed the diverse culture and friendly environment at the University of Peradeniya. The education system is great, and I made lifelong friends. The facilities were top-notch, and I felt well-prepared for the professional world after graduation. I also appreciated the various cultural events and activities that the university hosted.",
            from: "UAE",
            img: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            id: 3,
            name: "Sophia Kim",
            desc: "The university provided me with excellent research opportunities. I highly recommend it to international students. The professors encouraged independent thinking and fostered an environment of collaboration. I was able to engage in cutting-edge research in my field, which was one of the most fulfilling aspects of my academic journey.",
            from: "South Korea",
            img: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
            id: 4,
            name: "David Smith",
            desc: "Sri Lanka is an amazing place to study! The food, people, and education system exceeded my expectations. I was initially hesitant about studying abroad, but the warm hospitality and vibrant culture made me feel at home. I especially enjoyed the variety of local foods and the beautiful landscapes surrounding the campus.",
            from: "Canada",
            img: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        {
            id: 5,
            name: "Maria Garcia",
            desc: "The courses offered are top-notch, and the extracurricular activities are amazing! I had the chance to participate in multiple student organizations, and I gained practical skills outside the classroom. The university truly cares about providing a well-rounded education that prepares students for real-world challenges.",
            from: "Spain",
            img: "https://randomuser.me/api/portraits/women/5.jpg",
        },
        {
            id: 6,
            name: "John Doe",
            desc: "I had an amazing experience at the University of Peradeniya and would recommend it to everyone. The university has a welcoming atmosphere that fosters personal growth and development. I also appreciated the well-structured academic programs that prepared me for my career. The friends I made here will be lifelong companions.",
            from: "Australia",
            img: "https://randomuser.me/api/portraits/men/6.jpg",
        },
        {
            id: 7,
            name: "Jane Lee",
            desc: "A perfect place to study and experience new cultures. I feel like I gained so much! The academic rigor was complemented by the beautiful and peaceful environment of the campus. I enjoyed learning about Sri Lankan traditions, and I felt enriched by the diverse perspectives shared by my classmates.",
            from: "Singapore",
            img: "https://randomuser.me/api/portraits/women/7.jpg",
        },
        {
            id: 8,
            name: "Paul Brown",
            desc: "Fantastic experience! I loved every moment of my stay here and made some great friends. The support from faculty and staff was incredible, and I felt genuinely cared for during my time here. The university also offered ample opportunities for internships and career advancement, which was a huge plus.",
            from: "UK",
            img: "https://randomuser.me/api/portraits/men/8.jpg",
        },
        {
            id: 9,
            name: "Emma Wilson",
            desc: "Studying at the University of Peradeniya allowed me to grow both academically and personally. The professors were highly knowledgeable and encouraged a lot of interactive learning. I also participated in community service projects that made a positive impact on the local communities. It was a fulfilling and enriching experience.",
            from: "Germany",
            img: "https://randomuser.me/api/portraits/women/9.jpg",
        },
        {
            id: 10,
            name: "Liam Scott",
            desc: "The University of Peradeniya provided me with a fantastic learning environment and helped me to broaden my horizons. The campus was equipped with modern facilities, and the international student support team was always available to assist us with any concerns. The friendships I made here will last a lifetime.",
            from: "USA",
            img: "https://randomuser.me/api/portraits/men/10.jpg",
        },
        {
            id: 11,
            name: "Isabella Moore",
            desc: "I had an incredible time at the University of Peradeniya. The campus offers a beautiful setting for academic and personal growth. I participated in several academic conferences and networking events, which were invaluable for my career development. The university also emphasized the importance of holistic education.",
            from: "Canada",
            img: "https://randomuser.me/api/portraits/women/11.jpg",
        },
        {
            id: 12,
            name: "James Taylor",
            desc: "My experience at the University of Peradeniya was transformative. I was exposed to a variety of perspectives, both academic and cultural. The professors encouraged critical thinking and pushed me to excel in my studies. I also took part in cultural exchange programs, which broadened my understanding of the world.",
            from: "Australia",
            img: "https://randomuser.me/api/portraits/men/12.jpg",
        },
        {
            id: 13,
            name: "Charlotte Miller",
            desc: "Studying at the University of Peradeniya helped me develop valuable skills that I will carry with me throughout my career. The support from faculty was exceptional, and I was able to engage in research projects that were highly relevant to my field. I feel fully prepared for my future professional endeavors.",
            from: "France",
            img: "https://randomuser.me/api/portraits/women/13.jpg",
        },
        {
            id: 14,
            name: "Matthew Clark",
            desc: "My time at the University of Peradeniya was both challenging and rewarding. The university's commitment to academic excellence helped me develop the knowledge and skills necessary to succeed in my career. I also enjoyed participating in sports and recreational activities, which contributed to my overall well-being.",
            from: "New Zealand",
            img: "https://randomuser.me/api/portraits/men/14.jpg",
        },
        {
            id: 15,
            name: "Olivia Adams",
            desc: "The University of Peradeniya gave me the opportunity to immerse myself in a new culture while receiving a world-class education. The professors were experts in their fields, and I found the student community to be warm and welcoming. I would recommend this university to anyone looking for an enriching academic experience.",
            from: "Ireland",
            img: "https://randomuser.me/api/portraits/women/15.jpg",
        }
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
                {stdsay.map((student, index) => (
                    <div
                        key={index}
                        className="relative md:min-w-[calc(100%/2)] min-w-[calc(100%/1)] bg-white p-8  rounded-xl"
                        style={{ scrollSnapAlign: "start" }}
                    >
                        <img
                            src={student.img}
                            alt={student.name}
                            className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300"
                        />
                        <h3 className="text-xl font-semibold text-center mt-4">{student.name}</h3>
                        <p className="text-sm text-center text-gray-500">{student.from}</p>
                        <p className="text-gray-700 text-md mt-3 text-center">{student.desc}</p>
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
};

export default StudentSay;
