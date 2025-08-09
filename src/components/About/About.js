import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="side">
                <img src="/yash-picture.png" alt="Yash Panchal"></img>
                <p>
                    I am a second-year Computer Science student at Georgia Tech with a concentration in Intelligence and Systems & Architecture. My current focus is on applied artificial intelligence and systems-level software engineering. I am particularly interested in building intelligent tools that solve real-world problems at scale.
                    <br /><br />
                    At present, I am developing Jobly, an AI-powered job search engine that parses and ranks thousands of URLs to match users with highly relevant opportunities based on their resumes and search intent. The platform is built using Python (FastAPI), MongoDB, and React with TypeScript and Next.js.
                    <br /><br />
                    Alongside my academic coursework, I pursue personal and team-based projects that explore the intersection of intelligence and software. I am currently seeking research and internship opportunities in AI, systems, and full-stack development. Feel free to contact me with any inquiries at yashcpanchal41@gmail.com.
                </p>
            </div>
        </section>
    )
}

export default About;