import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed hidden md:block top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text">
            ZZN
          </div>

          <div className="flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-indigo-600 ${
                  activeSection === item.id
                    ? "text-indigo-600"
                    : "text-gray-700"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/Zwe-Zar-Ni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:text-indigo-700"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
