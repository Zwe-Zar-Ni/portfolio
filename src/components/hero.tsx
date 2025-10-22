import { Github, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 text-white bg-gradient-to-br from-teal-100 via-white to-purple-100">
      <div className="max-w-4xl px-6 mx-auto">
        <div className="text-center text-black">
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
            Zwe Zar Ni
          </h1>
          <p className="mb-8 text-xl font-light text-slate-700 md:text-2xl">
            Software Engineer
          </p>
          <div className="flex flex-col items-center justify-center gap-6 text-slate-700 md:flex-row">
            <a
              href="tel:+959963693157"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-slate-900"
            >
              <Phone size={18} />
              +95 996 369 315 7
            </a>
            <a
              href="mailto:heinzwe2626@gmail.com"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-slate-900"
            >
              <Mail size={18} />
              heinzwe2626@gmail.com
            </a>
            <a
              href="https://github.com/Zwe-Zar-Ni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-slate-900"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
