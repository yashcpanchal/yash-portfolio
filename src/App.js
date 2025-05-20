import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js'
import About from './components/About.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
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
