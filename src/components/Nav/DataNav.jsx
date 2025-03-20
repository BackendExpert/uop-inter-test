const MainNavData = [
    {
        id: 1,
        name: 'Directory',
        link: '#',
    },
    {
        id: 2,
        name: 'WebMail',
        link: '#',
    },
    {
        id: 3,
        name: 'Login',
        link: '#',
    },
    {
        id: 4,
        name: 'Emergency',
        link: '#',
    },
    {
        id: 5,
        name: 'IT Services',
        link: '#',
    },
    {
        id: 6,
        name: 'FAQ',
        link: '#',
    },

]

import { FaUserGraduate, FaPeopleGroup, FaDownload } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";



const secNavData = [
    // About
    {
        id: 1,
        name: 'Home',
        link: '#'
    },

    // Academic

    {
        id: 2,
        name: 'About UOP',
        link: '#'
    },



    // Students

    {
        id: 3,
        name: 'Academic Programs',
        icon: FaUserGraduate,
        submenu: [
            { id: 1, name: 'Undergraduate', link: '#' },
            { id: 2, name: 'Postgraduate', link: '#' },
        ]
    },

    // Publications

    {
        id: 4,
        name: "Research Opportunities",
        icon: FaUserGraduate,
        link: '#'
    },

    // Research

    {
        id: 5,
        name: 'Admissions',
        icon: FaFileAlt,
        submenu: [
            { id: 1, name: 'Eligibility', link: '#' },
            { id: 2, name: 'Application Process', link: '#' },
            { id: 3, name: 'Visa & Immigration', link: '#' }
        ]
    },

    // Centers & Units

    {
        id: 6,
        icon: MdPayment,
        name: 'Fees & Scholarships',
        submenu: [
            { id: 1, name: 'Tuition Fees', link: '#' },
            { id: 2, name: 'Available Scholarships', link: '#' },
        ]
    },



    // administration

    {
        id: 7,
        icon: FaPeopleGroup,
        name: "Student Life",
        submenu: [
            { id: 1, name: 'Accommodation', link: '#' },
            { id: 2, name: 'Health Services', link: '#' },
            { id: 3, name: 'Sports & Recreation', link: '#' },
        ]
    },

    // Alumni


    // Vacancies
    {
        id: 8,
        name: 'International Student Support',
        submenu: [
            { id: 1, link: '#', name: 'International Relations Office' },
            { id: 2, link: '#', name: 'Student Counseling & Career Support' },
        ]
    },
    {
        id: 9,
        name: 'Contact Us',
        link: '#'
    },
    {
        id: 10,
        name: 'Downloadable Resources',
        icon: FaDownload,
        submenu: [
            { id: 1, link: '#', name: 'Student Handbook (PDF)' },
            { id: 2, link: '#', name: 'Application Guide (PDF)' },
            { id: 3, link: '#', name: 'Course Catalogs' },
        ]
    },
    {
        id: 11,
        name: 'Apply Now ',
        icon: FaUserGraduate,
        link: '#'
    },
]

export { MainNavData, secNavData };