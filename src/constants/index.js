import { shopify, starbucks, tesla } from "../assets/images";
import gsap from "../assets/icons/gsap.svg"
import three from "../assets/icons/three.svg"
import figma from "../assets/icons/figma.svg"
import delhi from "../assets/images/delhi.png"
import source from "../assets/images/source.png"
import tele from "../assets/images/tele.png"
import timer from "../assets/icons/timer.svg"
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: gsap,
        name: "gsap",
        type: "Frontend",
    },
    {
        imageUrl: three,    
        name: "three",
        type: "Frontend",
    },
    {
        imageUrl: figma,    
        name: "figma",
        type: "Prototyping",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Delhiwallpapers",
        icon: delhi,
        iconBg: "#accbe1",
        date: "Oct 2020 - March 2023",
        points: [
            " UI/UX Design & Prototyping – Created website mockups using Figma.",
            " Frontend Development – Converted designs into responsive HTML, CSS, and JavaScript code, with exposure to React.js for dynamic elements.",
            "Website Performance Optimization – Improved website speed and responsiveness, ensuring a seamless shopping experience.",
            "Client Projects – Worked with multiple clients, delivering custom web development solutions based on their unique needs.",
        ],
    },
    {
        title: "Technical Support Engineer",
        company_name: "Teleperformance (Client-Adobe)",
        icon: tele,
        iconBg: "#ebc7dc",
        date: "May 2023 - Sept 2023",
        points: [
            "Debugging & Troubleshooting – Analyzed application logs and error reports to identify and resolve issues in Adobe Cloud applications",
            "Multitasking & Efficiency – Delivered timely solutions while handling multiple support tickets under tight deadlines.",
            "JIRA for Issue Tracking – Utilized JIRA to log, track, and manage software issues, ensuring a structured resolution process.",
            "Maintained a positive and professional rapport with customers throughout their interactions.",
            " Proficient in utilizing various communication and technical support tools like CustomerOne, Omni Agent Console and Bomgar."
        ],
    },
    {
        title: "Technical Support Engineer",
        company_name: "SourceFuse Technologies (Flxpoint)",
        icon: source,
        iconBg: "#e6b5b5",
        date: "Sept 2023 - Dec 2023",
        points: [
            "API Integrations : Debugging and troubleshooting API requests to ensure seamless data retrieval and synchronization.",
            "E-commerce Architecture – Gained insights into parent-child product structures, tagging, and automation workflows.",
            "JIRA for Error Reporting – Tracked and resolved software issues to maintain efficient e-commerce automation.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "FLXpoint Expertise: Guided customers on effective tool utilization through troubleshooting and solution implementation."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/unpairedProton',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/thevinaypratap/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Its Show Time',
        description: 'An online movie streaming platform using React.js and MUI for a user-friendly UI and API, resulting in 37% faster content loading times, established seamless single-page application navigation with React Router DOM and deployment on Netlify. ',
        link: 'https://itshowtime.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'E-commerce Admin Panel',
        description: "An e-commerce admin panel with CRUD operations via API, built using React.js, Tailwind CSS, and navigation with React Router and efficient state management via Context API, hosted successfully on a Hostinger subdomain, achieving 99.99% uptime." ,
        link: 'http://ecommerce.everyseva.com/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: "WhiteRann Resort",
        description: "Developed a responsive portfolio website for a resort using HTML, CSS, and Vanilla JavaScript, enhanced with smooth scrolling and animations using GSAP, Locomotive.js, and ScrollTrigger, and implemented interactive elements with Swiper.js, including direct contact features via WhatsApp and calling functionality.'",
        link: 'http://whiterann.everyseva.com/',
    },
    {
        iconUrl: timer,
        theme: 'btn-back-red',
        name: "Pomodoro Timer",
        description: "Developed a responsive Pomodoro timer web app with study, break, and long break modes, featuring background video and music that auto-stops, built using HTML, CSS, JavaScript, and GSAP for smooth animations.",
        link: 'https://pomodoro.everyseva.com/',
    },
];