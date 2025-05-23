import './Home.css';
import { FaGithub } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
    function TypewriterText() {
        return (
            <h1>
                I'm a&nbsp;
                <span className='typewriter'>
                    <Typewriter 
                        words={['Developer', 'Designer', 'Problem Solver']}
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
        <div>
            <ParticlesBackground />
            <section id="home" className="home">
                <h3>Hi, I'm Yash</h3>
                <TypewriterText />
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </section>
        </div>
    );
}

export default Home;