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

import hdr1 from '../../assets/IS.jpg'
import hdr2 from '../../assets/IS2.jpg'
import hdr3 from '../../assets/Hdr8.jpg'
import hdr4 from '../../assets/Hdr9.jpg'
import hdr5 from '../../assets/wp11704381.jpg'
import hdr6 from '../../assets/14.jpg'
import PGIS from '../../assets/PGIS.jpg'

const secNavData = [
    // About
    {
        id: 1,
        img: '',
        name: 'Home',
        link: '#'
    },

    // Academic

    {
        id: 2,
        img: '',
        name: 'About UOP',
        link: '#'
    },



    // Students

    {
        id: 3,
        img: hdr1,
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
        img: PGIS,
        name: "Research Opportunities",
        icon: FaUserGraduate,
        link: '#'
    },

    // Research

    {
        id: 5,
        img: hdr2,
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
        img: hdr3,
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
        img: hdr4,
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
        img: hdr5,
        name: 'International Student Support',
        submenu: [
            { id: 1, link: '#', name: 'International Relations Office' },
            { id: 2, link: '#', name: 'Student Counseling & Career Support' },
        ]
    },
    {
        id: 9,
        img: '',
        name: 'Contact Us',
        link: '#'
    },
    {
        id: 10,
        img: hdr6,
        name: 'Downloads',
        icon: FaDownload,
        submenu: [
            { id: 1, link: '#', name: 'Student Handbook (PDF)' },
            { id: 2, link: '#', name: 'Application Guide (PDF)' },
            { id: 3, link: '#', name: 'Course Catalogs' },
        ]
    },
    {
        id: 11,
        img: '',
        name: 'Apply Now ',
        icon: FaUserGraduate,
        link: '#'
    },
]

export { MainNavData, secNavData };