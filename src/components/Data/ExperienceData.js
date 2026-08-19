import { FaJava, FaPython, FaDocker, FaShieldAlt, FaMicrochip } from 'react-icons/fa';
import { SiPytorch, SiHuggingface, SiLangchain, SiC, SiTypescript, SiOpenssl, SiNextdotjs } from 'react-icons/si';
import { DiTerminal } from 'react-icons/di';

const experienceData = [
    {
        company: "Visa",
        role: "Software Engineering Intern",
        location: "Foster City, CA",
        dates: "May 2026 – Aug. 2026",
        link: null,
        bullets: [
            "Moved payments off premium secure hardware with a Java tokenization service, saving an estimated $9M/year.",
            "Secured PII with mutual-TLS auth and keyed-hash cache lookups, isolating raw-card exposure to one service.",
            "Benchmarked and optimized the request path under sustained load, cutting average latency 59% to 49ms.",
            "Architected stateless, event-driven workers over pooled backends, scaling to ~200 req/s per instance.",
            "Covered the service end to end with unit and integration tests, including per-field partial-failure cases."
        ],
        icons: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'Vert.x', icon: <DiTerminal /> },
            { name: 'mTLS', icon: <SiOpenssl /> },
            { name: 'Security', icon: <FaShieldAlt /> },
            { name: 'Docker', icon: <FaDocker /> }
        ]
    },
    {
        company: "Ancient Language Intelligence Lab",
        role: "Undergraduate Researcher",
        location: "Atlanta, GA",
        dates: "Jan. 2026 – Present",
        link: null,
        bullets: [
            "Shipped an end-to-end pipeline detecting citations in raw Greek text, reaching 0.88 macro F1 across 3 classes.",
            "Built TEI/XML parsers aligning Greek to its translations by CTS, LLM-labeling a 23K-example citation corpus.",
            "Fine-tuned Ancient Greek BERT with LoRA into a citation classifier, covering the 80% of untranslated texts."
        ],
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'PyTorch', icon: <SiPytorch /> },
            { name: 'Hugging Face', icon: <SiHuggingface /> }
        ]
    },
    {
        company: "Narb",
        role: "Software Engineering Intern",
        location: "Remote",
        dates: "Aug. 2025 – Dec. 2025",
        link: null,
        bullets: [
            "Built a no-code web dev system where users build, edit, and deploy their web-apps, live for 10+ SMB clients.",
            "Engineered an AST symbol-graph RAG pipeline, cutting hallucinations 63% against a flat-retrieval baseline.",
            "Automated CI/CD in LangGraph, gating Lighthouse and Web Vitals, going live in <3 min on $0.40 of tokens."
        ],
        icons: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'LangGraph', icon: <SiLangchain /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'Next.js', icon: <SiNextdotjs /> }
        ]
    },
    {
        company: "Georgia Tech Experimental Rocketry",
        role: "Avionics Software Engineer",
        location: "Atlanta, GA",
        dates: "Jan. 2025 – Present",
        link: null,
        bullets: [
            "Reconfigured 6,000+ lines of embedded C into mission, manager, and driver tiers, removing 20+ cross-layer calls.",
            "Wrote real-time Kalman filter and state machine logic, porting the flight software to new avionics hardware.",
            "Added flight data logging and tests against real hardware, catching sensor faults before launch."
        ],
        icons: [
            { name: 'C', icon: <SiC /> },
            { name: 'Embedded', icon: <FaMicrochip /> },
            { name: 'GDB', icon: <DiTerminal /> }
        ]
    }
];

export default experienceData;
