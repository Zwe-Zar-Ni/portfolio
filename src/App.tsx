import ReactLenis from "lenis/react";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ReactLenis root options={{ duration: 1.2 }} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
