import { Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="max-w-4xl px-6 mx-auto text-center">
        <h3 className="mb-4 text-2xl font-bold">Let's Connect</h3>
        <p className="mb-8 text-gray-300">
          I'm always interested in new opportunities and collaborations.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <a
            href="tel:+959963693157"
            className="flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-white"
          >
            <Phone size={18} />
            +95 996 369 315 7
          </a>
          <a
            href="mailto:heinzwe2626@gmail.com"
            className="flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-white"
          >
            <Mail size={18} />
            heinzwe2626@gmail.com
          </a>
          <a
            href="https://github.com/Zwe-Zar-Ni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-white"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            © 2025 Zwe Zar Ni. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
