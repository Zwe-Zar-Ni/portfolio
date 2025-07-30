import {
  Github,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  GitBranch
} from "lucide-react";

import ReactLenis from "lenis/react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ReactLenis root options={{ duration: 2 }} />
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
        <div className="max-w-4xl px-6 mx-auto">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
              Zwe Zar Ni
            </h1>
            <p className="mb-8 text-xl font-light text-blue-100 md:text-2xl">
              Software Developer
            </p>
            <div className="flex flex-col items-center justify-center gap-6 text-blue-100 md:flex-row">
              <a
                href="tel:+959963693157"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
              >
                <Phone size={18} />
                +95 996 369 315 7
              </a>
              <a
                href="mailto:heinzwe2626@gmail.com"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
              >
                <Mail size={18} />
                heinzwe2626@gmail.com
              </a>
              <a
                href="https://github.com/Zwe-Zar-Ni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
              >
                <Github size={18} />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl px-6 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
            About Me
          </h2>
          <div className="p-8 bg-gray-50 rounded-2xl">
            <p className="text-lg leading-relaxed text-gray-700">
              Motivated software developer with 2 years of experience in
              full-stack development, specializing in frontend development with
              JavaScript, have solid experience in backend development using PHP
              and Laravel, and have started building mobile applications with
              React Native. Skilled in creating responsive, user- friendly
              applications, writing clean and maintainable code, and
              collaborating effectively in cross-functional teams. Committed to
              continuous learning and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Flash International Call
              </h3>
              <p className="mb-3 text-gray-600">
                International call app using Voice over IP
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-orange-800 bg-orange-100 rounded">
                  React Native
                </span>
              </div>
            </div>
            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Shopping Platform
                </h3>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <p className="mb-3 text-gray-600">
                Multi-vendor eCommerce platform
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-white bg-black rounded">
                  Next.js
                </span>
              </div>
              <p className="text-xs text-gray-500">shopping.ooak.jp</p>
            </div>

            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Order Management
                </h3>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <p className="mb-3 text-gray-600">
                Stock & order management for telecom operator
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-red-800 bg-red-100 rounded">
                  Laravel
                </span>
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                  Vue.js
                </span>
              </div>
            </div>

            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">Shwe Li</h3>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <p className="mb-3 text-gray-600">
                Restaurant POS admin dashboard with food ordering system
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                  Vue.js
                </span>
              </div>
            </div>

            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">Job Portal</h3>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <p className="mb-3 text-gray-600">
                Job hunting service with admin dashboard
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-white bg-black rounded">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded">
                  React.js
                </span>
              </div>
              <p className="text-xs text-gray-500">job.ooak.jp</p>
            </div>

            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Student Management
                </h3>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <p className="mb-3 text-gray-600">
                International student management system
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                  Vue.js
                </span>
              </div>
            </div>
            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <h3 className="mb-2 text-lg font-bold text-gray-900">Zentry</h3>
              <p className="mb-3 text-gray-600">
                Intuitive expense tracker with modern UI
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-orange-800 bg-orange-100 rounded">
                  React Native
                </span>
                <span className="px-2 py-1 text-xs text-gray-800 bg-gray-100 rounded">
                  Expo
                </span>
                <span className="px-2 py-1 text-xs text-purple-800 bg-purple-100 rounded">
                  Drizzle ORM
                </span>
              </div>
            </div>
            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <h3 className="mb-2 text-lg font-bold text-gray-900">Listly</h3>
              <p className="mb-3 text-gray-600">
                Todo list application on steroids
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-orange-800 bg-orange-100 rounded">
                  React Native
                </span>
                <span className="px-2 py-1 text-xs text-gray-800 bg-gray-100 rounded">
                  Expo
                </span>
                <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                  SQLite
                </span>
              </div>
            </div>
            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <h3 className="mb-2 text-lg font-bold text-gray-900">Aora</h3>
              <p className="mb-3 text-gray-600">AI video showcasing platform</p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-orange-800 bg-orange-100 rounded">
                  React Native
                </span>
                <span className="px-2 py-1 text-xs text-gray-800 bg-gray-100 rounded">
                  Expo
                </span>
              </div>
            </div>
            <div className="p-6 transition-all duration-200 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Mobile Apps
              </h3>
              <p className="mb-3 text-gray-600">
                Various React Native applications including inventory
                management, receipt printing
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 text-xs text-orange-800 bg-orange-100 rounded">
                  React Native
                </span>
                <span className="px-2 py-1 text-xs text-gray-800 bg-gray-100 rounded">
                  Expo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Technical Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 transition-shadow duration-200 bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Programming Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Javascript", "Typescript", "PHP"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 transition-shadow duration-200 bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-emerald-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Databases & Cloud
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "SQLite", "Firebase", "Supabase"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 transition-shadow duration-200 bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-purple-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Server-side
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "Node.js"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium text-purple-800 bg-purple-100 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 transition-shadow duration-200 bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="text-orange-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Mobile Development
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm font-medium text-orange-800 bg-orange-100 rounded-full">
                  React Native
                </span>
              </div>
            </div>

            <div className="p-6 transition-shadow duration-200 bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-indigo-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Client-side
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Vue.js", "React.js", "Next.js", "Inertia"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 transition-shadow duration-200 bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="text-red-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Other Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Docker", "Linux"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl px-6 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Work Experience
          </h2>
          <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Software Developer
              </h3>
              <p className="text-lg font-medium text-blue-600">OOAK Inc</p>
              <p className="text-gray-600">December 2023 - Present</p>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-900">
                Responsibilities & Contributions:
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1 text-blue-500">•</span>
                  <span>
                    Developed and maintained full-stack web applications,
                    including a multi-vendor eCommerce platform and various
                    business management systems.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-blue-500">•</span>
                  <span>
                    Built internal tools and dashboards for telecom and
                    restaurant operations, including SIM/WiFi order management,
                    employee scheduling, and inventory tracking.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-blue-500">•</span>
                  <span>
                    Created a comprehensive school management system for
                    handling student information and academic processes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-blue-500">•</span>
                  <span>
                    Designed and implemented job listing and job-seeking
                    platforms with intuitive dashboards.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-blue-500">•</span>
                  <span>
                    Developed a private messaging app tailored for a business
                    community spanning telecom, retail, education, and real
                    estate sectors.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-blue-500">•</span>
                  <span>
                    Led the development of cross-platform inventory management
                    solutions using React Native for restaurant operations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-blue-500">•</span>
                  <span>
                    Collaborated closely with cross-functional teams to deliver
                    user-centric, scalable, and efficient software solutions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-blue-500">•</span>
                  <span>
                    Solved real-world business challenges by automating manual
                    workflows, improving data organization, and enhancing system
                    usability across web and mobile platforms.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default App;
