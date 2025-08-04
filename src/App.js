import { useState, useEffect } from 'react';
import AnimationWrapper from './components/Animations/AnimationWrapper.js';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Contact from './components/Contact/Contact.js';
import './App.css';

// Function to detect system theme preference
const getSystemTheme = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function App() {
  // Initialize state from system preference or localStorage if available
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || getSystemTheme();
  });

  // The toggle function now only switches between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save user's preference
  };

  // Effect to apply the theme class to the body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  // Effect to listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if the user hasn't manually set a theme
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);


  return (
    <div className="App">
      <Home />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AnimationWrapper>
        <About />
      </AnimationWrapper>
      <AnimationWrapper>
        <Projects />
      </AnimationWrapper>
      <AnimationWrapper>
        <Skills />
      </AnimationWrapper>
      <AnimationWrapper>
        <Contact />
      </AnimationWrapper>
    </div>
  );
}

export default App;
