import {
    FaPython,
    FaJava,
    FaCss3,
    FaHtml5,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaLinux,
    FaMicrochip,
    FaShieldAlt,
    FaCubes,
    FaSitemap,
    FaBolt,
    FaExchangeAlt,
    FaBrain,
    FaProjectDiagram,
    FaDiceD6,
    FaBook,
    FaDumbbell,
    FaRunning,
    FaFootballBall,
    FaHiking,
    FaFistRaised,
} from 'react-icons/fa';
import {
    SiDjango,
    SiNumpy,
    SiPytorch,
    SiTensorflow,
    SiFirebase,
    SiNextdotjs,
    SiMongodb,
    SiC,
    SiCplusplus,
    SiKotlin,
    SiTypescript,
    SiFastapi,
    SiPostman,
    SiGnubash,
    SiKubernetes,
    SiPostgresql,
    SiGooglecloud,
    SiScikitlearn,
    SiLangchain,
} from 'react-icons/si';
import { DiTerminal } from "react-icons/di";
import { GoDatabase } from "react-icons/go";


const skillsData = [
    {
        section: "Current Tech Stack",
        content: [
            { name: "Java", icon: <FaJava /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Vert.x", icon: <FaBolt /> },
            { name: "PyTorch", icon: <SiPytorch /> },
            { name: "FastAPI", icon: <SiFastapi /> },
            { name: "Docker", icon: <FaDocker /> },
        ]
    },
    {
        section: "Languages",
        content: [
            { name: "Python", icon: <FaPython /> },
            { name: "Java", icon: <FaJava /> },
            { name: "C", icon: <SiC /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "Kotlin", icon: <SiKotlin /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "SQL", icon: <GoDatabase /> },
            { name: "Assembly", icon: <FaMicrochip /> },
            { name: "Bash", icon: <SiGnubash /> },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3 /> },
        ]
    },
    {
        section: "Libraries/Frameworks",
        content: [
            { name: "PyTorch", icon: <SiPytorch /> },
            { name: "TensorFlow Lite", icon: <SiTensorflow /> },
            { name: "scikit-learn", icon: <SiScikitlearn /> },
            { name: "NumPy", icon: <SiNumpy /> },
            { name: "LangGraph", icon: <SiLangchain /> },
            { name: "FastAPI", icon: <SiFastapi /> },
            { name: "Vert.x", icon: <FaBolt /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Node.js", icon: <FaNodeJs /> },
        ]
    },
    {
        section: "Developer Tools",
        content: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "Kubernetes", icon: <SiKubernetes /> },
            { name: "AWS", icon: <FaAws /> },
            { name: "Google Cloud", icon: <SiGooglecloud /> },
            { name: "Linux", icon: <FaLinux /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "GDB/PDB", icon: <DiTerminal /> },
            { name: "Postman", icon: <SiPostman /> },
        ]
    },
    {
        section: "Concepts",
        content: [
            { name: "Data Structures & Algorithms", icon: <FaProjectDiagram /> },
            { name: "System Design", icon: <FaSitemap /> },
            { name: "Distributed Systems", icon: <FaCubes /> },
            { name: "Concurrency", icon: <FaBolt /> },
            { name: "REST APIs", icon: <FaExchangeAlt /> },
            { name: "RAG", icon: <FaBrain /> },
            { name: "Security", icon: <FaShieldAlt /> },
        ]
    },
    {
        section: "Interests",
        content: [
            { name: "Catan & Poker", icon: <FaDiceD6 /> },
            { name: "Reading", icon: <FaBook /> },
            { name: "Weightlifting", icon: <FaDumbbell /> },
            { name: "Running", icon: <FaRunning /> },
            { name: "Football", icon: <FaFootballBall /> },
            { name: "Hiking", icon: <FaHiking /> },
            { name: "Jiu Jitsu", icon: <FaFistRaised /> },
        ]
    }
];

export default skillsData;
