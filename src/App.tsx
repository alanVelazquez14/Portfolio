import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <ToastContainer />
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
