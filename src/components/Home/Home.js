import './Home.css';
import './HomeNav.css'; // <-- Import the new CSS file
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
    function TypewriterText() {
        return (
            <h1>
                I'm&nbsp;
                <span className='typewriter'>
                    <Typewriter 
                        words={['a cs student', 'an ai enthusiast', 'a software developer', 'a lifelong learner']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={150}
                        deleteSpeed={100}
                        delaySpeed={2000}
                    />
                </span>
            </h1>
        )
    }
    return (
        // FIX: Added a container div for proper positioning context
        <div className="home-container">
            <nav className="home-nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <ParticlesBackground />
            <section id="home" className="home">
                <h3>Hi, I'm Yash Panchal</h3>
                <TypewriterText />
                <div className="home-links">
                    <div className="social-icons">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                    <a href="/Yash_Resume.pdf" download="Yash_Panchal_Resume.pdf" className="resume-btn">View Resumé</a>
                </div>
            </section>
        </div>
    );
}

export default Home;
