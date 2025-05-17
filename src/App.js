import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import Projects from './components/Projects.js'
import About from './components/About.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
