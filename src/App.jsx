import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Education from './sections/Education.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
