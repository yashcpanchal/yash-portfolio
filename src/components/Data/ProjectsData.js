import { FaPython, FaHtml5, FaCss3, FaJs, FaNodeJs, FaDocker, FaMicrochip, FaFlask } from 'react-icons/fa';
import { SiDjango, SiPandas, SiNumpy, SiTensorflow, SiFirebase, SiKotlin, SiC, SiCplusplus, SiGnu, SiFastapi, SiMongodb, SiTypescript, SiNextdotjs, SiLangchain, SiQemu, SiHuggingface, SiGooglegemini } from 'react-icons/si';
import { DiTerminal } from "react-icons/di";
import { GoDatabase } from "react-icons/go";

const projectsData = [
    {
        name: "IMC Prosperity Algorithmic Trading Competition",
        description: "Placed in the top 0.5% of the field (71st of 14,000+ teams) in IMC's global algorithmic trading competition. Built an event-driven backtester around a C++ price-time matching engine that replays 20,000+ order-book ticks per day, so strategies are evaluated against realistic fill behavior rather than mid-price assumptions. Optimized 12-parameter strategies in parallel through a cross-validated Optuna pipeline, lifting team profit roughly 46%. The strategy set spans statistical arbitrage with volatility-adaptive thresholds, Black–Scholes options pricing with volatility smile fitting and delta-hedging, and time-series-driven trend following and mean reversion.",
        github: null,
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'Optuna', icon: <FaFlask /> }
        ]
    },
    {
        name: "xv6 Kernel Extensions",
        description: "Extended the xv6 teaching kernel across virtual memory, concurrency, and storage. Reworked virtual memory with copy-on-write fork and lazy page allocation, cutting fork() clock cycles by 99% by deferring page copies until first write. Built a user-space threading library with create/join, locks, and condition variables that schedules entirely in userland, avoiding kernel calls on the common path. Extended the file system with per-user permissions and a two-level index, scaling maximum file size from 4MB to 4GB. Debugged throughout with GDB against QEMU.",
        github: null,
        liveLink: null,
        icons: [
            { name: 'C', icon: <SiC /> },
            { name: 'x86 Assembly', icon: <FaMicrochip /> },
            { name: 'QEMU', icon: <SiQemu /> },
            { name: 'GDB', icon: <DiTerminal /> },
            { name: 'GCC', icon: <SiGnu /> }
        ]
    },
    {
        name: "Jobly — AI-native job board",
        description: "An AI agent that automates the job search end to end. A LangGraph + Playwright agent runs with async concurrency to discover and parse 1,000+ new job URLs in under two minutes, classifying pages and extracting structured job data along the way. Resume-to-job fit is scored from semantic vector search combined with skill, seniority, and location signals, reaching 92% user satisfaction on match quality. Built on a containerized FastAPI backend with MongoDB Atlas Vector Search for persistence and retrieval, fronted by a Next.js and TypeScript app.",
        github: null,
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'FastAPI', icon: <SiFastapi /> },
            { name: 'LangGraph', icon: <SiLangchain /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'Next.js', icon: <SiNextdotjs /> }
        ]
    },
    {
        name: "re.mind — real-time dementia assistant",
        description: "A native Android app built with Kotlin and Jetpack Compose that acts as a cognitive aid for people living with dementia, with paired patient and caregiver portals synced through Firebase. An on-device TensorFlow Lite vision pipeline, fed by Google's ML Kit face detection, recognizes known faces at 90%+ accuracy with sub-200ms latency, so recognition works without a network round trip. AI-extracted insights stream to caretaker dashboards, with Gemini prompts adapted across three dementia stages to keep support appropriate to the patient's condition.",
        github: "https://github.com/yashcpanchal/re.mind",
        liveLink: null,
        icons: [
            { name: 'Kotlin', icon: <SiKotlin /> },
            { name: 'TensorFlow Lite', icon: <SiTensorflow /> },
            { name: 'Gemini', icon: <SiGooglegemini /> },
            { name: 'Firebase', icon: <SiFirebase /> },
            { name: 'Node.js', icon: <FaNodeJs /> }
        ]
    },
    {
        name: "Spotify Wrapped Experience App",
        description: "A Django-backed take on Spotify Wrapped. Integrated the Spotify API with OAuth 2.0, managing access and refresh tokens for persistent data fetching, and built an interactive frontend with drag-and-drop game mechanics via Sortable.js and in-page audio through the Spotify Web Playback SDK. User profiles and generated \"Wrapped\" reports persist in SQLite.",
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
        name: "Atlanta Food Finder",
        description: "A restaurant discovery web app on a Django backend, using the Google Maps JavaScript API and its Places library for an interactive map with real-time search. The frontend renders results and detailed pop-up info windows per location, while Django's ORM and SQLite manage user profiles and saved favorites.",
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
        description: "Top 50 finish out of 2,000+ teams in the UPenn Wharton Investment Competition. Architected a quantitative trading strategy that ran a Hugging Face RoBERTa model over historical market chatter sourced through the Twitter API, then combined that sentiment signal with fundamental financial metrics from Alpha Vantage to build a predictive model.",
        github: null,
        liveLink: null,
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'Hugging Face', icon: <SiHuggingface /> }
        ]
    }
];

export default projectsData;
