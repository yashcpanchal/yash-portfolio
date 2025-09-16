import { FaPython, FaHtml5, FaCss3, FaJs, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiDjango, SiPandas, SiNumpy, SiTensorflow, SiFirebase, SiKotlin, SiC, SiGnu, SiFastapi, SiMongodb, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { DiTerminal } from "react-icons/di";
import { GoDatabase } from "react-icons/go";

const projectsData = [
    {
        name: "Automated Job Applications/Jobly",
        description: "Developing an AI agent to automate the job search process, orchestrating a multi-step discovery and application workflow using LangChain and LangGraph. This system leverages Google Gemini for generating dynamic search queries and classifying web pages and a custom NER model for job information extraction, all powered by a containerized FastAPI backend with Docker. For data persistence and retrieval, the project utilizes MongoDB, enhancing job-to-resume matching with Atlas Vector Search and semantic embeddings from sentence-transformers. Web automation and data sourcing are handled through Playwright and the Brave Search API, while a custom ranking engine built with spaCy and a weighted scoring algorithm filters and prioritizes opportunities based on comprehensive skill and experience analysis. Next.js and Typescript are used to create a dynamic frontend.",
        github: "https://github.com/yashcpanchal/Jobly",
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'FastAPI', icon: <SiFastapi /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Typescript', icon: <SiTypescript /> },
            { name: 'Next.js', icon: <SiNextdotjs /> }
        ]
    },
    {
        name: "Re.Mind - Dementia Care Assistant App",
        description: "Developed re.mind, a native Android application using Kotlin and Jetpack Compose, designed as a cognitive aid for individuals with dementia. This dual-portal platform for patients and caregivers relies on Firebase for user management and data synchronization. A key feature is the conversational AI assistant, which uses the Google Gemini Pro 1.5 API, and integrates patient data from Firebase to deliver personalized, memory-triggering support. A real-time facial recognition system was also implemented, which utilizes Google's ML Kit for on-device face detection and a TensorFlow Lite model to generate facial embeddings.",
        github: "https://github.com/yashcpanchal/re.mind",
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
        description: "Developed Spotify Wrapped with a Django backend, integrating the Spotify API by implementing OAuth 2.0 to securely manage access and refresh tokens for persistent data fetching. Constructed a dynamic frontend with HTML, CSS, and modern JavaScript, incorporating libraries like Sortable.js to build interactive drag-and-drop game mechanics and the Spotify Web Playback SDK to provide integrated audio playback. Utilized a SQLite database to ensure data persistence, storing user profiles and personalized \"Wrapped\" reports.",
        github: "https://github.com/yashcpanchal/SpotifyWrapped",
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'Django', icon: <SiDjango /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'HTML5', icon: <FaHtml5 /> },
            { name: 'CSS3', icon: <FaCss3 /> },
            { name: "SQLite", icon: <GoDatabase /> }
        ]
    },
    {
        name: "IMC Prosperity Trading Challenge",
        description: "Developed a series of trading algorithms in Python, placing 71st internationally and 24th in the U.S. Implemented statistical arbitrage with volatility-adaptive thresholds, Black–Scholes options pricing with volatility smile fitting and delta-hedging, and time-series–driven trend following and mean reversion strategies. Also integrated backtesting and grid search optimization to refine parameters.",
        github: null,
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'NumPy', icon: <SiNumpy /> },
        ]
    },
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
        name: "Atlanta Food Finder",
        description: "Built \"Atlanta Food Finder,\" a restaurant discovery web application, using a Django backend. Integrated the Google Maps JavaScript API and its Places library to deliver an interactive map with real-time search functionality. Developed a dynamic frontend with HTML, CSS, and JavaScript to render search results and detailed pop-up information windows for each location. Utilized Django's ORM and a SQLite database to manage user profiles and persist their favorite restaurant selections.",
        github: "https://github.com/yashcpanchal/Atlanta-Food-Finder",
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'Django', icon: <SiDjango /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'HTML5', icon: <FaHtml5 /> },
            { name: 'CSS3', icon: <FaCss3 /> },
            { name: "SQLite", icon: <GoDatabase /> }
        ]
    },
    {
        name: "Market Sentiment & Investment Strategy Analysis",
        description: "Secured a top 50 placement out of over 2,000 teams in the UPenn Wharton Investment Competition by architecting a quantitative trading strategy in Google Colab. Used a RoBERTa model from Hugging Face to perform sentiment analysis on historical market data sourced via the Twitter API. Combined this sentiment data with fundamental financial metrics sourced from the alpha vantage API to build a predictive model.",
        github: null,
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'NumPy', icon: <SiNumpy /> },
        ]
    }
];

export default projectsData;