import { Github, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-6 overflow-hidden md:py-16"
    >
      <div className="grid items-center gap-12 mx-auto max-w-7xl md:grid-cols-2">
        <div
          className={`space-y-4 transform transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <h1 className="text-5xl font-black md:text-6xl">
            <span className="text-slate-800">Zwe Zar Ni</span>
          </h1>

          <h2 className="text-3xl font-bold text-indigo-500">
            Software Engineer
          </h2>

          <p className="leading-relaxed text-gray-500 ">
            Full-stack developer specializing in building responsive,
            user-friendly applications across web and mobile platforms.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/Zwe-Zar-Ni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-8 py-4 font-medium text-indigo-800 transition-all duration-300 transform bg-indigo-100 rounded-lg hover:shadow hover:-translate-y-1"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-4 sm:gap-6 sm:flex-row">
            <a
              href="tel:+959963693157"
              className="flex items-center gap-2 text-gray-700 transition-colors hover:text-indigo-600"
            >
              <Phone size={20} />
              <span className="text-sm">+95 996 369 315 7</span>
            </a>
            <a
              href="mailto:heinzwe2626@gmail.com"
              className="flex items-center gap-2 text-gray-700 transition-colors hover:text-indigo-600"
            >
              <Mail size={20} />
              <span className="text-sm">heinzwe2626@gmail.com</span>
            </a>
          </div>
        </div>

        <div
          className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-teal-400 to-indigo-400 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 via-indigo-400 to-teal-400 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-teal-400 via-indigo-400 to-indigo-400 rounded-[30%_70%_70%_30%/30%_60%_40%_70%] animate-blob animation-delay-4000"></div>
          </div>

          <div className="absolute p-4 transition-transform duration-300 transform bg-white shadow-xl md:top-10 md:left-10 top-4 left-4 rounded-2xl hover:scale-110">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-xl">
                <span className="font-bold text-white">FE</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Frontend</p>
                <p className="text-xs text-gray-600">React & Vue</p>
              </div>
            </div>
          </div>

          <div className="absolute p-4 transition-transform duration-300 transform bg-white shadow-xl right-40 top-40 rounded-2xl hover:scale-110">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl">
                <span className="font-bold text-white">BE</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Backend</p>
                <p className="text-xs text-gray-600">Node & Laravel</p>
              </div>
            </div>
          </div>
          <div className="absolute p-4 transition-transform duration-300 transform bg-white shadow-xl bottom-40 left-40 rounded-2xl hover:scale-110">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-xl">
                <span className="font-bold text-white">DB</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Database</p>
                <p className="text-xs text-gray-600">Mysql & Sqlite</p>
              </div>
            </div>
          </div>
          <div className="absolute p-4 transition-transform duration-300 transform bg-white shadow-xl md:bottom-10 md:right-10 bottom-4 right-4 rounded-2xl hover:scale-110">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl">
                <span className="font-bold text-white">MB</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Mobile</p>
                <p className="text-xs text-gray-600">React Native & Expo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            transform: translate(0, 0) scale(1);
          }
          34% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
            transform: translate(20px, -20px) scale(1.05);
          }
          67% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
