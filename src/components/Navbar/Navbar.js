import { useState } from 'react';
import './Navbar.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ theme, toggleTheme }) {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleThemeClick = () => {
        toggleTheme();
        setIsAnimating(true);
        // Reset animation state after it finishes (500ms)
        setTimeout(() => setIsAnimating(false), 500);
    };

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
                    <li>
                        <button 
                            className={`theme-toggle-btn ${isAnimating ? 'animate' : ''}`} 
                            onClick={handleThemeClick}
                            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        >
                            {theme === 'light' ? <FaSun /> : <FaMoon />}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
