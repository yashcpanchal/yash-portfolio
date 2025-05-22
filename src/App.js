import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js'
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Contact from './components/Contact/Contact.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
