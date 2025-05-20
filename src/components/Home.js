import './Home.css';
import { FaGithub } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

function Home() {
    return (
        <section className="home">
            <ParticlesBackground />
            {/* <h3>Hi, I'm Yash</h3>
            <a href="https://github.com/"><FaGithub /></a> */}
        </section>
    )
}

export default Home;