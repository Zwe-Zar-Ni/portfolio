import { projects } from "../config/projects";
import SectionHeader from "./section-header";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-12 sm:gap-12">
      <span className="w-2 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="w-24 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="text-sm font-medium opacity-20 text-background-primary">
        1 2 3
      </span>
      <span className="w-24 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="w-2 h-2 rounded-full opacity-20 bg-background-primary" />
    </div>
  );
};

const ProjectFooter = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4 sm:col-span-2 sm:gap-12">
      <span className="w-2 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="w-24 h-2 rounded-full opacity-20 bg-background-primary" />
      <span className="w-2 h-2 rounded-full opacity-20 bg-background-primary" />
    </div>
  );
};

const Projects = () => {
  return (
    <section className="max-w-screen-xl py-16 mx-auto">
      <SectionHeader heading="PROJECTS" />
      <div className="relative flex items-center justify-center gap-8 sm:gap-16">
        <div className="flex items-end gap-4">
          <span className="w-3 h-3 bg-background-primary/50" />
          <span className="w-1 h-16 bg-background-primary" />
        </div>
        <h3 className="text-xl sm:text-4xl font-medium text-heading-foreground corner-box py-1.5 px-4">
          WORK
        </h3>
        <h2 className="p-1.5 sm:px-4 text-heading-primary sm:min-w-[480px] min-w-[240px] font-black text-xl sm:text-4xl border rounded-sm border-background-primary">
          PROJECT HIGHLIGHTS
        </h2>
        <div className="flex items-end gap-4">
          <span className="w-1 h-16 bg-background-primary" />
          <span className="w-3 h-3 bg-background-primary/50" />
        </div>
      </div>
      <ul className="px-8 mt-12">
        {projects.map((project, index) => (
          <li
            key={project.name}
            className="grid items-center grid-cols-1 my-6 gap-x-12 gap-y-4 sm:grid-cols-2"
          >
            <img src={project.image} alt={project.name} />
            <div>
              <h3 className="px-4 py-1 text-xl font-bold text-white uppercase rounded-sm w-fit bg-background-primary">
                {project.name}
              </h3>
              <h4 className="mb-1 text-lg font-bold text-heading-secondary">
                {project.tagline}
              </h4>
              <h4 className="mb-1 text-heading-secondary">
                {project.description}
              </h4>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.techstack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 border rounded-full text-paragraph-primary border-background-primary/50"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-col gap-1 mt-2 sm:col-span-2">
              <h5 className="text-background-primary/70">
                Hightlighted Features
              </h5>
              {project.features.map((feature, i) => (
                <li key={feature}>
                  <p
                    key={i}
                    className="font-sans font-medium text-paragraph-primary"
                    dangerouslySetInnerHTML={{ __html: feature }}
                  ></p>
                </li>
              ))}
            </ul>
            <ul className="sm:col-span-2">
              <h5 className="text-background-primary/70">Key Obstacles</h5>
              {project.technicalHighlights.map((highlight, i) => (
                <li key={i}>
                  <p
                    key={i}
                    className="font-sans font-medium text-paragraph-primary"
                    dangerouslySetInnerHTML={{ __html: highlight }}
                  ></p>
                </li>
              ))}
            </ul>
            {index < projects.length - 1 ? <ProjectFooter /> : null}
          </li>
        ))}
      </ul>
      <Footer />
    </section>
  );
};

export default Projects;
