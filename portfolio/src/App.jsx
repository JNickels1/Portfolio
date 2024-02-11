import './App.css'
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/project';
import Contact from './components/contact';
import Navbar from './components/NavBar';



export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}
