import {
  Code,
  Database,
  GitBranch,
  Globe,
  Server,
  Smartphone
} from "lucide-react";

const Skills = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl px-1 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Technical Skills
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 transition-all duration-200 transform shadow-sm bg-gradient-to-br from-white to-white hover:from-teal-100 hover:to-purple-100 lg:col-span-2 rounded-xl hover:shadow-md hover:-translate-y-1">
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
          <div className="p-6 transition-all duration-200 transform shadow-sm bg-gradient-to-br from-white to-white hover:from-teal-100 lg:row-span-2 hover:to-purple-100 rounded-xl hover:shadow-md hover:-translate-y-1">
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

          <div className="p-6 transition-all duration-200 transform shadow-sm bg-gradient-to-br from-white to-white hover:from-teal-100 hover:to-purple-100 lg:row-span-2 rounded-xl hover:shadow-md hover:-translate-y-1">
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

          <div className="p-6 transition-all duration-200 transform shadow-sm bg-gradient-to-br from-white to-white hover:from-teal-100 hover:to-purple-100 rounded-xl hover:shadow-md hover:-translate-y-1">
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

          <div className="p-6 transition-all duration-200 transform shadow-sm bg-gradient-to-br from-white to-white hover:from-teal-100 hover:to-purple-100 rounded-xl hover:shadow-md hover:-translate-y-1">
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

          <div className="p-6 transition-all duration-200 transform shadow-sm bg-gradient-to-br from-white to-white hover:from-teal-100 hover:to-purple-100 rounded-xl hover:shadow-md hover:-translate-y-1">
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
  );
};

export default Skills;
