import Experiences from "./components/experiences";
import Hero from "./components/hero";
import Skills from "./components/skills";

const App = () => {
  return (
    <div className="py-32 bg-[#010102] p-1 pattern-background w-screen overflow-hidden">
      <Hero />
      <Skills />
      <Experiences />
    </div>
  );
};

export default App;
