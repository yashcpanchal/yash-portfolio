import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="side">
                <img src="/yash-picture.png" alt="Yash Panchal"></img>
                <p>
                    I am a second-year Computer Science student at Georgia Tech with a concentration in Intelligence and Systems & Architecture. My current focus is on applied artificial intelligence, full-stack development, and systems-level software engineering. I am particularly interested in building intelligent tools that solve real-world problems at scale.
                    <br /><br />
                    At present, I am developing Jobly, an AI-powered job search engine that parses and ranks thousands of URLs to match users with highly relevant opportunities based on their resumes and search intent. The platform is built using Python (FastAPI), MongoDB, and React with TypeScript and Next.js.
                    <br /><br />
                    My background also includes experience in finance/data analytics systems. I previously interned at a wealth management firm where I built automated data pipelines and predictive analytics for portfolio analysis. I also placed 79th globally (top 25 in the US) in the IMC Prosperity Algo Trading Competition and top 50 (top 2%) globally in the UPenn investing competition by building/designing robust trading systems.
                    <br /><br />
                    Alongside my academic coursework in AI, computer systems, architecture, and algorithm design, I regularly pursue personal and team-based projects that explore the intersection of intelligence and software. I am currently seeking research and internship opportunities in AI, systems, and full-stack development.
                </p>
            </div>
        </section>
    )
}

export default About;