import './Navbar.css';

function Navbar() {
    return (
    <div className="navbar">
        <nav>
            <h1>
                Yash's Portfolio
            </h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>)
}

export default Navbar;