import ReactLenis from "lenis/react";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Footer from "./components/footer";
import { useState } from "react";
import Navigation from "./components/navigation";
import { ArrowUp } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <button
        className="fixed z-[999] w-50 bottom-4 right-4 bg-indigo-100 text-indigo-800 rounded-full w-12 h-12 flex items-center justify-center animate-bounce outline-none ring-0"
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUp size={21} />
      </button>
      <ReactLenis root options={{ duration: 1.2 }} />
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
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
