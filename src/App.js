import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Education />
     <Projects />
     <Contact />
    </>
  );
}

export default App;
