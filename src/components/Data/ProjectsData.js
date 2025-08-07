import { FaPython, FaHtml5, FaCss3, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiDjango, SiPandas, SiNumpy, SiPytorch, SiTensorflow, SiFirebase, SiKotlin, SiC, SiGnu } from 'react-icons/si';
import { DiTerminal } from "react-icons/di";

const projectsData = [
    {
        name: "Virtual Memory System Simulator",
        description: "Designed and implemented a virtual memory simulator in C, featuring address translation, page fault handling, and frame eviction algorithms, optimizing memory management for a 24-bit virtual address space with 16KB pages.",
        github: null,
        liveLink: null,
        icons: [
            { name: 'C', icon: <SiC /> },
            { name: 'GDB', icon: <DiTerminal /> },
            { name: 'GCC', icon: <SiGnu /> }
        ]
    },
    {
        name: "Re.Mind - Dementia Care Assistant App",
        description: "Developed an Android app in a team of 4 engineers using Kotlin and Jetpack Compose, integrating the Gemini LLM to successfully guide dementia patients towards recalling memories with a 90% success rate.",
        github: "https://github.com/",
        liveLink: null,
        icons: [
            { name: 'Kotlin', icon: <SiKotlin /> },
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            { name: 'Firebase', icon: <SiFirebase /> },
            { name: 'Node.js', icon: <FaNodeJs /> }
        ]
    },
    {
        name: "Spotify Wrapped Experience App",
        description: "Led a team of 4 engineers as Scrum Master, Product Manager, and Full-Stack Engineer, developing a Django-based web app that integrates Spotify's API to generate personalized music insights and interactive games.",
        github: "https://github.com/",
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'Django', icon: <SiDjango /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'HTML5', icon: <FaHtml5 /> },
            { name: 'CSS3', icon: <FaCss3 /> }
        ]
    },
    {
        name: "Market Sentiment & Investment Strategy Analysis",
        description: "Engineered a scalable data pipeline in Python using Alpha Vantage API, Pandas, and Numpy to process real-time financial data, generating stock scores based on fundamental and technical indicators.",
        github: "https://github.com/",
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'PyTorch', icon: <SiPytorch /> }
        ]
    }
];

export default projectsData;