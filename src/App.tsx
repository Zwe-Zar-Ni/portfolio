import Experiences from "./components/experiences";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";

import ReactLenis from "lenis/react";

const App = () => {
  return (
    <div className="py-32 bg-[#010102] p-1 pattern-background w-screen overflow-hidden">
      <ReactLenis root options={{ duration: 1.5 }} />
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
};

export default App;
