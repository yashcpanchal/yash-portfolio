import { useState, forwardRef } from 'react';
import './Navbar.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = forwardRef(({ theme, toggleTheme, isSticky }, ref) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleThemeClick = () => {
        toggleTheme();
        setIsAnimating(true);
        // Reset animation state after it finishes (500ms)
        setTimeout(() => setIsAnimating(false), 500);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <div ref={ref} className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <nav>
                <h1>
                    Yash's Portfolio
                </h1>
                <div className="nav-right">
                    <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                    <button
                        className={`theme-toggle-btn ${isAnimating ? 'animate' : ''}`}
                        onClick={handleThemeClick}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <FaSun /> : <FaMoon />}
                    </button>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>
        </div>
    );
});

export default Navbar;
