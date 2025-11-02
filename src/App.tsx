import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
