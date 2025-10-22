import { stacks } from "../configs";
import { projects } from "../configs/projects";

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl px-1 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className={`p-6 transition-all duration-200 transform shadow-sm bg-gradient-to-br from-white to-white hover:from-teal-100 hover:to-purple-100 ${proj.size} rounded-xl hover:shadow-md hover:-translate-y-1`}
            >
              <h3 className="mb-1 text-lg font-bold text-gray-900">
                {proj.name}
              </h3>
              <p className="mb-3 text-gray-600">{proj.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {proj.stacks.map((stack) => (
                  <span
                    key={stack}
                    className={`px-2 py-1 text-xs ${stacks[stack].colors} rounded`}
                  >
                    {stacks[stack].name}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-xs">
                {proj.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-500"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
