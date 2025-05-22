import './Home.css';
import { FaGithub } from 'react-icons/fa';
import ParticlesBackground from '../ParticlesBackground';

function Home() {
    return (
        <div>
            <ParticlesBackground />
            <section id="home" className="home">
                <h3>Hi, I'm Yash</h3>
                <a href="https://github.com/"><FaGithub /></a>
            </section>
        </div>
    );
}

export default Home;